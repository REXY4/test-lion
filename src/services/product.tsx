import { ApiCategory, ApiProduct, ApiVariant } from "@/config/api";

class ProductService {
    async getAll() {
        const product = await ApiProduct.get("/product");
        const category = await ApiCategory.get(
            `${process.env.NEXT_PUBLIC_API_CATEGORY}/category`
        );
        const variant = await ApiVariant.get(
            `${process.env.NEXT_PUBLIC_API_VARIANT}/variant`
        );
        const result = product.data.map((item: any) => {
            return {
                ...item,
                category: category.data.filter(
                    (c: any) => c.id === item.product_category_id
                ),
                variant: variant.data.filter(
                    (c: any) => item.id === c.product_id
                ),
            };
        });
        return {
            data: result,
        };
    }

    async getDetail(id: number) {
        const product = await ApiProduct.get("/product");
        const category = await ApiCategory.get(
            `${process.env.NEXT_PUBLIC_API_CATEGORY}/category`
        );
        const variant = await ApiVariant.get(
            `${process.env.NEXT_PUBLIC_API_VARIANT}/variant`
        );
        const result = product.data
            .filter((c: any) => c.id === id)
            .map((item: any) => {
                return {
                    ...item,
                    category: category,
                    variant: variant.data.filter(
                        (c: any) => parseInt(item.id) === c.product_id
                    ),
                };
            });
        return {
            data: result,
        };
    }

    async create(data:any){
        const config = {
            headers : {
                "Content-Type" : "application/json"
            }
        }
        const response = await ApiProduct.post("/product",data.product,config)
        const variant = data.variant.map(async(item:any)=>{
           const responses = await ApiVariant.post(
            `${process.env.NEXT_PUBLIC_API_VARIANT}/variant`, {...item.form, product_id : response.data.id}
            );
            return responses
        })
        await variant
        return response
    }
}

export default ProductService;
