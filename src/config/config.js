module.exports = {
    port: 8081,
    dbURL: "mongodb://localhost:27017/fbs",
    secretKey: "fastbssecretkey",
    dbOptions: {
        //        useNewUrlParser: true,
        //        useFindAndModify: false,
        //        useCreateIndex: true
    },
    attachmentsDir: "C:/WWW/domains/mevn.loc/server/src/data/attachments/",
    attachmentsURL: "http://127.0.0.1:8080/attachments/",
}
