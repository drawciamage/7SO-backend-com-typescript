import "reflect-metadata";
import app from "./app";

app.listen(process.env.PORT || 3333, () =>
  console.log("\x1b[32m[ BACK END ] \x1b[0mServidor rodando.")
);
