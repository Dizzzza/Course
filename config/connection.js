import dotenv from "dotenv";
import { Sequelize } from "sequelize";

dotenv.config();

export const sequelize = new Sequelize(
    process.env.DATABASE_NAME,      // Название базы данных
    process.env.DATABASE_USERNAME, // Имя пользователя
    process.env.DATABASE_PASSWORD, // Пароль
    {
        host: process.env.DATABASE_HOST, // Хост базы данных
        port: process.env.DATABASE_PORT || 5432, // Порт базы данных (по умолчанию 5432)
        dialect: "postgres", // Указываем, что используем PostgreSQL
        logging: false,      // Отключить логи SQL-запросов
    }
);

export async function connectDB() {
    try {
        // Проверяем подключение к базе данных
        await sequelize.authenticate();
        console.log("Connected to PostgreSQL Database successfully!");
    } catch (error) {
        console.error("Failed to connect to PostgreSQL Database", { message: error.message });
    }
}

