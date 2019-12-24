//searchInput为搜索的字符串，data为被查询数据，searchData为搜索后得到的数据
export function Search(searchInput, data, searchData) {
    // search 是 v-model="search" 的 search
    const search = searchInput;
    if (search) {
        searchData = data.filter(function (product) {
            // 每一项数据
            // console.log("product", product);
            console.log(Object.keys(product));
            return Object.keys(product).some(function (key) {
                // 每一项数据的参数名
                // console.log(key);
                return (
                    String(product[key])
                        // toLowerCase() 方法用于把字符串转换为小写。
                        .toLowerCase()
                        // indexOf() 方法可返回某个指定的字符串值在字符串中首次出现的位置。
                        .indexOf(search) > -1
                );
            });
        });
        searchData.length//total为数据总条数
    } else if (search.length == 0) {
        searchData = data;
    } else {
        return searchData;
    }
}