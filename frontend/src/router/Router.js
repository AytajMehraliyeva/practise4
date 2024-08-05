const { default: Add } = require("../page/site/Add/Add");
const { default: Detail } = require("../page/site/Detail/Detail");
const { default: Home } = require("../page/site/Home/Home");
const { default: SiteRoot } = require("../page/site/SiteRoot");
const { default: Wishlist } = require("../page/site/Wishlist/Wishlist");


const Router=[{
    path:"/",
    element:<SiteRoot/>,

    children:[{
        path:"",
        element:<Home/>
    },
  {
    path:"add",
    element:<Add/>
  }, 
  {
    path:"wishlist",
    element:<Wishlist/>
  },
  {
    path:":id",
    element:<Detail/>
  }
]
}]

export default Router