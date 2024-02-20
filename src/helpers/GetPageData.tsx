export const getPageData = (page: number) =>{
    const limit = page === 1? 10 : 10 ////11:12
    const offset = page === 1
    ? 0
    : (page - 2) * 12 + 11


    return{
        limit: limit,
        offset: offset
    }
}