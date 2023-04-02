import {ApiTransaction} from "@/config/api";

class TransactionService {
    async getAll() {
        const url = process.env.NEXT_PUBLIC_API_TRANSACTION;
        const response = await ApiTransaction.get("/transaction");
        return response
    }
}

export default TransactionService;
