export type ApiRes<T> = {
    code:string,
    msg:string,
    result:T,
}
export type categoryL = {
    children:categoryChildren[],
    goods:categoryGoods[],
    id:string,
    name:string,
    picture:string
} 
export type categoryChildren = {
    id:string,
    name:string,
    picture:string
}
export type categoryGoods = {
    desc:string,
    id:string,
    name:string,
    picture:string,
    price:string,
}
export type GoodsItem = categoryGoods[]
export type BannerItem = {
    id: string;
    imgUrl: string;
    hrefUrl: string;
    type: string;
}
export type BannerList = BannerItem[]