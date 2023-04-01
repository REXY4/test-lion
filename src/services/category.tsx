import { ApiCategory, ApiProduct, ApiVariant } from "@/config/api";

class CategoryService {
    async getAll() {
        const response = await ApiCategory.get(
            `${process.env.NEXT_PUBLIC_API_CATEGORY}/category`
        );
        return response;
    }
}

export default CategoryService;
