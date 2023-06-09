import { ApiCategory, ApiProduct, ApiVariant } from "@/config/api";

class CategoryService {
    async getAll() {
        const response = await ApiCategory.get(
            `${process.env.NEXT_PUBLIC_API_CATEGORY}/category`
        );
        return response;
    }

    async getDetail(id:string) {
        const response = await ApiCategory.get(
            `${process.env.NEXT_PUBLIC_API_CATEGORY}/category/${id}`
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

     async updateCategory(data:any, id:string) {
        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }
        const response = await ApiCategory.put(
            `${process.env.NEXT_PUBLIC_API_CATEGORY}/category/${id}`, {...data, active : true}, config
        );
        return response;
    }

    async deleteBy(id:string) {
        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }
        const response = await ApiCategory.delete(
            `${process.env.NEXT_PUBLIC_API_CATEGORY}/category/${id}`, 
        );
        return response;
    }
}

export default CategoryService;
