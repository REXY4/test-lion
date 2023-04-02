import { ApiCategory, ApiProduct, ApiVariant } from "@/config/api";

class CategoryService {
    async getAll() {
        const response = await ApiCategory.get(
            `${process.env.NEXT_PUBLIC_API_CATEGORY}/category`
        );
        return response;
    }

    async create(data:any) {
        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }
        const response = await ApiCategory.post(
            `${process.env.NEXT_PUBLIC_API_CATEGORY}/category`, {...data, active : true}, config
        );
        return response;
    }
}

export default CategoryService;
