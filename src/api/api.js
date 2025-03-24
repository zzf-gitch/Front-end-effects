import { getReq } from "./request.js";

export const menuList = (params) => {
    return getReq("json/menu.json", params)
}