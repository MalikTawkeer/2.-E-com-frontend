export const apiBaseUrl = import.meta.env.VITE_API_URL;

// Customer endpoints
export const login = "api/v1/user/login";
export const signup = "api/v1/user/register";
export const homeFeed = "api/v1/user/homefeed";

// Product endpoints
export const getProductsByCategoryId = "api/v1/products/category/";
export const getProductsByDiscountId = "api/v1/products/discount/";
