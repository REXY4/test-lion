import { ApiCategory, ApiProduct, ApiVariant } from "@/config/api";

class ProductService {
    async getAll(){
        const product = await ApiProduct.get("/product");
        const category = await ApiCategory.get(`${process.env.NEXT_PUBLIC_API_CATEGORY}/category`);
        const variant =  await ApiVariant.get(`${process.env.NEXT_PUBLIC_API_VARIANT}/variant`);
        const result = product.data.map((item:any)=>{
            return {
                ...item,
                category : category.data.filter((c:any) => parseInt(c.id) === item.product_category_id),
                variant : variant.data.filter((c:any)=> parseInt(item.id) ===  c.product_id)
            }
        })
        return {
            data : result
        }
    }

    async getDetail(id:number){
        const product = await ApiProduct.get("/product");
        const category = await ApiCategory.get(`${process.env.NEXT_PUBLIC_API_CATEGORY}/category`);
        const variant =  await ApiVariant.get(`${process.env.NEXT_PUBLIC_API_VARIANT}/variant`);
        const result = product.data.filter((c:any)=>c.id === id).map((item:any)=>{
            return {
                ...item,
                category : category.data.filter((c:any) => parseInt(c.id) === item.product_category_id),
                variant : variant.data.filter((c:any)=> parseInt(item.id) ===  c.product_id)
            }
        })
        return {
            data : result
        }
    }
}

export default ProductService;