import { google } from "googleapis";

// 日付を "MM.DD" フォーマットに変換する関数
const formatDate = (dateString) => {
    const date = new Date(dateString);
    const month = date.getUTCMonth() + 1; // 月は0から始まるため+1
    const day = date.getUTCDate();
    return `${month}.${day}`;
}

const getDayOfWeek = (dateString) => {
    const date = new Date(dateString);
    const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return daysOfWeek[date.getUTCDay()];
}

export const getSheetsData = async () => {
    const auth = new google.auth.GoogleAuth({
        credentials: {
            client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
            private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n")
        },
        scopes: ["https://www.googleapis.com/auth/spreadsheets.readonly"]
    })

    const sheets = google.sheets({ version: "v4", auth: await auth.getClient() })

    // 各シートの範囲を指定
    const ranges = ["Sheet1!B:E", "Sheet2!B:E"]

    try {
        // 各シートからデータを取得
        const responses = await Promise.all(
            ranges.map(range => sheets.spreadsheets.values.get({
                spreadsheetId: process.env.GOOGLE_SHEET_ID,
                range
            }))
        )

        // 取得したデータに曜日情報を追加
        const allData = responses.map((response, sheetIndex) => {
            return response.data.values.map((row, rowIndex) => {
                if (rowIndex === 0) return row; // ヘッダー行はそのまま
                if (sheetIndex === 0) { // Sheet1 の場合
                    const startDate = row[1];
                    const endDate = row[2];
                    const formattedStartDate = formatDate(startDate);
                    const formattedEndDate = formatDate(endDate);
                    const stDayOfWeek = getDayOfWeek(startDate);
                    const endDayOfWeek = getDayOfWeek(endDate);
                    return [row[0], formattedStartDate, formattedEndDate, row[3], stDayOfWeek, endDayOfWeek];
                } else {
                    return row; // Sheet2 はそのまま
                }
            });
        });

        return allData;
    } catch (error) {
        console.error("Error fetching sheets data:", error);
        return [];
    }
}
