export const baseUrl = "https://tuhongwei.github.io/";
export const VERSION = '1.0.0';

// Docs: https://github.com/yscoder/hexo-generator-restful

// Get Hexo Config
// 获取所有 Hexo 配置（站点配置和主题配置）。
// Request
// GET /api/site.json
export const SITE_URL = 'api/site.json';

// Get Posts
// 如果配置 posts_size: 0 则不分页，以下请求会获取全部文章。
// Request
// GET /api/posts.json
export const POSTS_URL = 'api/posts.json';

// Get Posts By Page
// 获取分页数据
// Request
// GET /api/posts/:PageNum.json
export const POSTS_PAGE_URL = 'api/posts/';

// Get All Tags
// 获取所有文章标签，如果文章无标签则不生成。
// Request
// GET /api/tags.json
export const TAGS_URL = 'api/tags.json';

// Get Posts By Tag
// 获取某一标签下的所有文章
// Request
// GET /api/tags/:TagName.json
// todo 
export const POST_TAG_URL = 'api/tags/';

// Get All Categories
// 获取所有文章分类，如果文章无分类则不生成。
// Request
// GET /api/categories.json
export const CATEGORIES_URL = 'api/categories.json';

// Get Posts By Categorie
// 获取某一分类下的所有文章
// Request
// GET /api/categories/:CategorieName.json
// todo
export const POST_CATEGORIE_URL = 'api/categories/';

// Get Post By Slug
// 根据文章别名获取文章详细信息
// Request
// GET /api/articles/:Slug.json
// export const ARTICLE_URL = 'api/articles/';

// Get Implecit Pages
// 获取来自主题的 Hexo 隐式页面内容，如 About 等。因隐式页面（除 About 等导航栏入口页外）一般在 Hexo 不提供直接访问入口，调用此 API 的开发者需要了解其完整路径，此接口默认关闭。

// 例如:

// Request
// GET /api/pages/about.json