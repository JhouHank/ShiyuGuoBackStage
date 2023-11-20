<div align="center">

# 拾月菓購物網站後台

![拾月菓購物網站後台封面](frontend\public\ShiyuGuoBackStageCover.jpg)

</div>

[Demo 影片（2 分 03 秒）](https://youtu.be/JulT4vvLIuw)

## 作品說明

針對針對販賣日式點心的購物網站所製作的後台，提供商家的會員資料、訂單資訊以及商品資訊，致力於為店家提供一個良好的管理介面。

## 系統說明

**版本**

本專案在 Node.js `v18.16.0` 環境下進行開發。

**專案運行**

您可以按照以下步驟運行專案（前端及後端皆可適用）：

```shell
npm install
npm start
```

或

```shell
yarn
yarn dev
```

這些命令將安裝所有必要的相依套件，並啟動開發伺服器，讓您能夠開始開發和預覽您的專案。

如果您需要更多詳細資訊，請參考專案的 `package.json`。

## 資料夾說明

```shell
├── frontend
│   ├── public              # 包含應用程式的靜態資源，如圖像、字體等。
│   │    └── index.html     # 應用程式的主HTML文件，用於載入JavaScript檔案和渲染應用程式。
│   ├── src                 # 專案的主要原始碼資料夾，包含了應用程式的原始程式碼。
│   │    ├── api/           # 存放應用程式的API相關程式碼。
│   │    ├── assets/        # 包含應用程式的樣式檔案以及靜態資源，如圖像、字體等。
│   │    ├── components/    # 存放應用程式中的元件。
│   │    ├── context/       # 存放應用程式的狀態管理工具相關的程式碼。
│   │    ├── hooks/         # 存放應用程式的自定義React hooks相關程式碼。
│   │    ├── layout/        # 存放應用程式的佈局元件。
│   │    ├── App.js         # 應用程式的主應用程式元件。
│   │    ├── index.scss     # 主要樣式表文件，包含應用程式的樣式定義。
│   │    └── index.js       # 應用程式的主入口檔案。
│   └── package.json        # 專案的npm套件設定文件，包含了專案依賴和腳本。
├── backend
│   ├── config/             # 存放應用程式的配置相關程式碼。
│   ├── controllers/        # 存放應用程式的控制器相關程式碼。
│   ├── middleware/         # 存放應用程式的中間件相關程式碼。
│   ├── routes/             # 存放應用程式的路由相關程式碼。
│   │    └── api/           # 存放應用程式的API路由相關程式碼。
│   ├── views/              # 存放應用程式的視圖相關程式碼。
│   ├── app.js              # 應用程式的主入口檔案。
│   └── package.json        # 專案的npm套件設定文件，包含了專案依賴和腳本。
└── README.md               # 包含項目的簡要描述和使用說明的自述文件。
```

## 使用技術

**前端框架與函式庫**

- React.js：前端開發框架，用於建立使用者介面和應用程式的元件。
- React-Router：用於處理單頁應用程式（SPA）中的路由函式庫，方便管理不同頁面的路徑切換。
- Bootstrap：開源的前端框架，提供了一套用於快速開發響應式和現代化網頁的 CSS 和 JavaScript 元件。
- Sass：CSS 預處理器，擴展了 CSS 語法，提供變數、巢狀規則等功能，使風格表更具模組化和可維護性。
- Sweetalert2：用於替代瀏覽器原生彈出框的 JavaScript 插件。它提供了漂亮的、可自定義的彈出視窗，增強了用戶體驗。
- Axios：基於 Promise 的 HTTP 客戶端，用於發送 HTTP 請求。它支持簡單的配置、攔截器、取消請求等功能，是前端開發中常用的工具之一。
- chart.js：用於繪製圖表的 JavaScript 函式庫。它支援多種圖表類型，包括折線圖、柱狀圖、圓餅圖等，並提供了豐富的配置選項。
- Moment：一個用於處理日期和時間的 JavaScript 函式庫。它提供了許多方便的功能，例如解析、格式化、顯示相對時間等，使得在應用程式中處理日期和時間變得更加方便。

**動畫效果**

- AOS（Animation of Scroll）：用於實現頁面滾動時的動畫效果的函式庫。
- Framer-motion：一個用於 React 的動畫函式庫，它使得在 React 應用程式中添加流暢且具有生動感的動畫變得更加容易。它支持各種動畫效果，如淡入淡出、滑動、縮放等。

**後端框架與函式庫**

- Express：快速而靈活的 Node.js Web 應用程式框架，簡化了後端應用程式的開發，提供豐富的功能和中間件。
- Bcryptjs：用於對使用者密碼進行加密和比對的函式庫，增加安全性。
- Cookie-Parser：用於解析 HTTP 請求中的 cookie，方便在後端應用程式中處理用戶身份驗證等相關信息。
- Cors：處理跨來源 HTTP 請求的中間件，允許或阻止來自其他網域的請求，保障應用程式的安全性。
- Dotenv：用於加載環境變數的工具，有助於在應用程式中管理敏感信息和配置。
- JsonWebToken：用於生成和驗證 JSON Web Tokens（JWT），在前後端之間安全地傳遞信息。
- Multer：用於處理文件上傳的中間件，支持在 Node.js 中輕鬆處理文件上傳操作。
- NodeMailer：用於在 Node.js 中發送電子郵件的模組，支援各種郵件傳送服務。

**資料庫與資料表說明**

- Mysql：開源的關聯型數據庫管理系統，用於儲存和檢索後端應用程式的數據。

```shell
└── japan
    ├── cards       # 訂單中禮物卡內容的資料表。
    ├── member      # 後台管理者的資料表。
    ├── orders      # 訂單主要內容的資料表。
    ├── products    # 商品內容的資料表。
    └── users       # 網站會員的資料表。

```

## 相關連結與資料

**後端 .env 檔案**

```shell
DATABASE_USER = root
DATABASE_PASSWORD =
DATABASE_HOST = localhost
DATABASE_PORT = 3306
DATABASE = japan
PORT = 8000
REFRESH_TOKEN_SECRET = b82763328994a259aa34bf8721fa2232a2d9b9eea5b351216fb057ecff7ccb0cadb5af7b93a227ec4a20d3156f72e06aa2d724ced062c37296fd36de6b6ad7b2
ACCESS_TOKEN_SECRET = c76d58080d26d91fd103bc2828320ef4b5b1cd86040dff84ef21255c695164621c01bb2c73b812e09c282c8237e2538c09fa6c787760f07b1319facc8a5b00b8
RESET_TOKEN_SECRET = 40ab3db8a85d32e7e88ee79ebfd453394267221506cc68118c94f9d22217f41c5fa71b44b2b154c7f7954f4d497ce07749a091e7a992eeb4de27238cda89c005
GMAIL_USER =
GMAIL_PASS =

```

- [Demo 影片（2 分 03 秒）](https://youtu.be/JulT4vvLIuw)
