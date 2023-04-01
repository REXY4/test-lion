import axios from "axios";

const ApiProduct = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_PRODUCT,
});

const ApiCategory = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_CATEGORY,
});

const ApiVariant = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_VARIANT,
});

const ApiTransaction = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_TRANSACTION,
});

export { ApiProduct, ApiCategory, ApiVariant, ApiTransaction };
