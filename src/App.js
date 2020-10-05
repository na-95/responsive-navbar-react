import React from "react";
import "./App.css";
import SideDrawer from "./SideDrawer";
import Backdrop from "./Backdrop"
import Navbar from './Navbar';
// import DrawerToggle from "./DrawerToggle";



export default class App extends React.Component {

  state = {
    showSideDrawer: false
  }

  DrawerToggleHandler = () => {
    this.setState((prevState) => { return { showSideDrawer: !(prevState.showSideDrawer) } })
    console.log(this.state.showSideDrawer)
  }

  render() {
    let backdrop;
    if (this.state.showSideDrawer) {
      backdrop = <Backdrop click={this.DrawerToggleHandler} />
    }

    return (
      <div className="App">
        <Navbar DrawerToggleHandler={this.DrawerToggleHandler} />
        <SideDrawer show={this.state.showSideDrawer} />
        {backdrop}
        <div>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe similique mollitia reprehenderit harum, libero vel ad repellat delectus doloribus ratione vero, quam ab quidem ipsum veritatis! Beatae, maxime est commodi praesentium ipsum corporis sint ratione ex tenetur consequatur quasi eius similique molestias deleniti iste blanditiis at voluptatibus error ipsa alias voluptate itaque? Perferendis, nulla veniam excepturi minus quam deleniti et hic tenetur, officia sint eos nisi, architecto distinctio est! Velit, soluta? Alias, accusamus voluptatibus. Ipsa facere nihil odio iusto neque officia cum ab natus? Nam aut quasi autem vero totam sapiente dolorum, soluta fugiat dolorem quibusdam nesciunt, ipsum atque recusandae ab, quae aspernatur amet ipsa repudiandae voluptatibus necessitatibus minus iusto quidem cum earum. Fugit sed asperiores ducimus distinctio quae, aliquid a nulla harum autem id tempora neque atque provident minus suscipit ipsum commodi explicabo voluptatibus, placeat optio pariatur dolor possimus saepe. Cumque ullam minima odit ducimus neque vitae aliquid, molestiae sapiente perspiciatis non quos odio id tenetur voluptate deserunt debitis qui culpa? Consectetur alias nostrum ratione accusantium, aliquam, perspiciatis sunt at, vero amet labore saepe commodi quos assumenda beatae totam atque? A inventore totam aut laborum, iste commodi ipsum, reprehenderit quis quod quasi corrupti natus? Nisi in repellendus commodi fugiat similique iure optio minima voluptatum, debitis quia est praesentium, et iusto nihil ab? A, sit nam iusto cupiditate saepe explicabo reprehenderit at tenetur enim numquam possimus quasi fuga nisi. Placeat, maxime cupiditate. Ratione laboriosam molestias optio consequatur quidem recusandae minima provident tenetur facilis, fuga error mollitia ducimus maiores ea, ex neque magnam voluptatem dignissimos quo dolore! Velit non, ratione officiis error deleniti magnam dolorem qui libero necessitatibus quam hic, culpa eaque beatae odit repellendus sunt earum possimus harum sequi maxime ipsum maiores. Fuga, quos minus eaque, excepturi accusantium possimus eveniet nam doloribus inventore cumque qui laudantium sequi quod quia ab? Praesentium minima amet, aut cum debitis aperiam eos magnam eveniet dicta alias, adipisci laborum cumque molestiae. Sed facilis ducimus non. Tempora, sequi ullam sit asperiores quisquam ex praesentium. Quisquam, sapiente nihil temporibus voluptates cupiditate harum vitae! Fugit quae ad nesciunt dolorum autem dolores nemo, ipsam aliquid veritatis doloremque quaerat, facilis natus. Est expedita officia eveniet culpa vel rem commodi, laboriosam quo earum velit natus magnam facilis fugit dolor non ipsum aliquam eius maiores aspernatur et quae animi quos! Dolore voluptatibus labore ad distinctio adipisci, commodi, ipsa, et repellendus nemo eaque aut voluptatum nulla soluta magni quaerat molestiae officiis nobis voluptas quod accusantium quis ratione eveniet accusamus! Delectus, dignissimos? Temporibus et vel doloremque. Quos dolores sint officiis at nobis asperiores non dicta velit iusto optio ut, necessitatibus rem odio temporibus sequi incidunt. Fugiat quia, laboriosam et repudiandae nam harum, atque, veritatis neque eaque mollitia praesentium placeat voluptatem sequi. Fugit repudiandae sunt eum ut fugiat? Dolore sed incidunt necessitatibus numquam vitae saepe facilis deserunt ad, accusantium corrupti ut debitis facere delectus? Quia laborum libero eveniet consequuntur unde, corporis nesciunt. Alias, nesciunt aperiam aut incidunt, velit culpa ut ipsum dolor voluptates quod obcaecati sed debitis aspernatur provident omnis dolore inventore, assumenda totam! KUTTAAAAAAAAAAA Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptate incidunt, natus tenetur, eveniet sequi corrupti soluta nesciunt, deserunt sapiente delectus expedita ipsam pariatur suscipit? Beatae aliquam ea rerum fuga facilis?Lorem ipsum dolor sit amet, consectetur adipisicing elit. Placeat sunt iure repellat laboriosam. Asperiores cumque error, distinctio atque accusantium reiciendis. Doloremque deserunt a alias minus aliquid laboriosam nostrum facere vero. Repudiandae reprehenderit laborum nisi earum dignissimos! Numquam qui nostrum laboriosam odit officia velit dolores tempore at, ab tempora repudiandae ut consequatur nesciunt ipsa, tenetur, quasi aperiam illum est. Magnam culpa soluta veniam facere dolorum accusamus ea libero perspiciatis, sint doloribus, quia, ullam dolores sunt atque totam odit nesciunt in voluptatibus aperiam itaque. Explicabo voluptas nam aut odio magni amet voluptatibus maiores! Dolorem beatae rerum pariatur error, non modi vitae. Quasi totam nulla ratione distinctio perferendis dicta atque esse enim autem voluptatibus ipsa excepturi ut eligendi aut natus maiores, perspiciatis ad molestiae porro dolores omnis sequi recusandae commodi! Possimus magnam exercitationem excepturi eligendi reprehenderit tempora, officia quod voluptate eum, ratione fugit suscipit iure numquam maxime mollitia totam expedita soluta id natus ipsum! Magni qui eveniet repellat cum, minus ex. Eaque optio quam ratione voluptas assumenda quas possimus exercitationem quisquam consequatur. Rerum odio repudiandae perspiciatis ducimus architecto ipsam recusandae, pariatur exercitationem, dolorum beatae deleniti aut. Nesciunt ipsum voluptatem cum aliquam, qui eaque quod velit facilis perferendis quasi odit provident, inventore nemo, magnam error architecto earum at eum quae laborum possimus excepturi eveniet in? Autem velit nihil provident a consequuntur minima ipsa atque reiciendis, iusto nobis fugit et, nostrum labore itaque mollitia ad tenetur fugiat repellendus amet facilis cupiditate eius voluptatem sunt. Iusto autem rerum possimus aut assumenda quam exercitationem perspiciatis veritatis, ducimus quos at praesentium, dicta expedita corporis fugiat numquam. Voluptates, magnam? Quam, aliquid? Excepturi, iste ratione deleniti nemo ipsam quam obcaecati labore, doloribus et quidem quibusdam atque, nisi dolorem! Eligendi recusandae quia temporibus minus maiores sequi accusamus unde possimus nostrum hic! Dignissimos sapiente quia dolore cumque ea? Corporis saepe dolorum blanditiis esse aliquid magnam ratione velit voluptate mollitia libero beatae aliquam temporibus accusantium quisquam tenetur, dicta est, adipisci ullam soluta expedita reprehenderit possimus voluptas magni iusto. Optio, omnis tenetur quidem, voluptates ipsum quas ipsa, harum debitis incidunt sint necessitatibus similique obcaecati. Nostrum accusamus ratione aspernatur similique odit libero dolores qui suscipit sit enim odio at accusantium minus, doloremque cum, nesciunt eius ipsam adipisci maxime est! Labore sunt obcaecati, reprehenderit commodi corporis ad dolore eveniet sit, ea animi placeat. Accusantium tempora vel odit dicta maiores enim ea nobis. Inventore omnis quasi quas harum itaque dolorum quis incidunt, quod pariatur assumenda voluptatibus perspiciatis in explicabo, adipisci cumque commodi. Odio sunt, nobis cupiditate nostrum, eveniet, dolore repellat placeat voluptatibus aut maxime distinctio voluptas maiores natus doloribus dicta delectus vel. Modi eaque vitae iusto nulla est. Provident suscipit ratione, voluptatum et quisquam recusandae quasi fugit consectetur nesciunt vitae illum hic cupiditate sequi quae earum debitis, similique quas dolorum quo aliquam. Repellat esse voluptatem quaerat vel laboriosam blanditiis et! Illo rerum iure error, illum, impedit corporis cum in reprehenderit quos sint voluptatem beatae maxime ipsum autem accusamus amet suscipit nobis nesciunt nisi vel voluptates magni possimus dignissimos quod. Rem molestias libero debitis error quis neque eveniet aliquam, ullam autem sed alias dolore! Ipsa vel officiis veritatis! Laudantium a odio delectus deserunt, nihil autem et eum corrupti! Esse fugiat debitis ipsa voluptate in molestiae consequuntur molestias quasi accusamus nam perspiciatis, voluptatibus consectetur, quae ipsum cum! Est cumque quasi alias aspernatur ab animi odio, corporis eos fuga blanditiis harum, laboriosam repellat? Aliquid accusamus dicta autem inventore repudiandae. Voluptas sed maxime deserunt vitae natus animi, soluta amet odio eaque, quo atque molestiae pariatur quam porro id voluptatem dignissimos molestias consequatur libero impedit facilis. Facilis nihil nulla beatae doloremque. Pariatur, magni. Exercitationem vel nobis, modi ipsa molestias iure saepe praesentium possimus eos maiores consequuntur, minus fugiat incidunt ducimus ullam, animi itaque dicta. Delectus nulla molestiae accusantium aspernatur quia quos pariatur, voluptate officiis praesentium veritatis velit repellendus accusamus fugiat officia quas, culpa quibusdam, voluptas perferendis dignissimos! Sequi voluptate culpa consectetur mollitia id reprehenderit quod expedita harum debitis ullam quia aperiam nisi praesentium quas error est nulla, necessitatibus iure. Accusamus, explicabo est soluta molestias veritatis autem architecto dolorum placeat. Dicta eveniet ullam corrupti officia! Modi voluptas ipsa laudantium ab incidunt numquam vero iusto odit, id nam autem ea? Velit iusto voluptate, nobis sequi id aliquam, ipsa aliquid sunt, beatae aspernatur incidunt nulla adipisci quis. Quibusdam fuga ipsam, explicabo provident culpa est voluptatibus minima numquam nemo odit accusamus accusantium doloribus vitae architecto. Saepe quos numquam ipsam, illum, odit laborum sequi perspiciatis vel repellendus rem fuga cumque doloribus soluta obcaecati inventore? Mollitia, aliquam similique minus harum inventore optio iure itaque fuga ab porro quaerat, excepturi ex. Tempora porro repudiandae ad maiores suscipit eum dolores corrupti nostrum veritatis numquam eaque, ut, inventore labore error iure pariatur voluptas! Magnam alias tenetur quas labore voluptates laboriosam ducimus eius quae! Qui fugiat ut quo nemo asperiores provident, alias maiores consequatur, nobis praesentium consectetur molestias fuga nam ad corrupti, ipsum sapiente. Quo sint totam delectus deleniti nemo doloremque maxime pariatur repellat! Accusantium aspernatur suscipit porro fuga error nulla expedita eos asperiores recusandae. Perspiciatis nostrum ipsa tempore nesciunt fugiat similique enim blanditiis necessitatibus voluptatibus ad ex doloribus odit iure totam illo ipsum veniam eligendi, provident libero qui doloremque quasi saepe aliquam tenetur? Amet voluptas, architecto quo cupiditate, mollitia voluptatem dolor veritatis a harum aut consequatur unde quisquam repudiandae impedit eius voluptate saepe omnis quam voluptates odit? Nihil quia animi tempora numquam explicabo, maxime cum molestiae architecto ut assumenda accusantium? Illo et asperiores nulla soluta minus aliquid, voluptates esse corporis, maiores vitae architecto aut, illum ad animi explicabo. Ducimus veritatis nemo aut ab nisi, doloremque saepe incidunt, ipsam molestiae laboriosam asperiores officiis consequatur quibusdam repellat error accusantium laborum nobis quas? Nihil, impedit. Impedit aliquid veritatis quam itaque, reprehenderit vitae quas quos accusamus minus asperiores odit inventore culpa delectus libero ea maiores porro? Deserunt dicta commodi alias optio, quod tenetur laborum, illo error possimus aliquam impedit repellat atque labore libero ea similique, aliquid sunt provident cum necessitatibus quisquam cumque. Laboriosam nihil vitae sequi dolore reiciendis culpa odit nemo numquam molestias architecto? Labore mollitia, quas maxime minus autem facilis unde voluptatum sequi nobis? Optio, dicta? Ipsa exercitationem, quasi natus itaque veritatis, aliquid eos voluptatibus optio quam aut ut et sunt ipsam? Impedit officia veniam laboriosam illo rem aut ipsum adipisci cumque molestiae. Libero odit cum facilis rem tenetur, sequi quas ratione placeat sint voluptatum corrupti culpa expedita inventore ullam ipsa nisi nam rerum perferendis numquam, repellat omnis. Quae, repellat labore! Laudantium, molestias reprehenderit. Corporis, excepturi laboriosam! Similique vel, deserunt iste veniam, harum vitae accusamus pariatur quas ipsam facilis, nostrum ea ratione obcaecati laudantium hic. Cupiditate atque natus, quisquam tempora sunt aperiam similique eius temporibus ipsa suscipit provident qui doloribus iure? Adipisci, possimus mollitia! Vero, exercitationem quidem voluptatem nostrum aliquam aliquid facere excepturi fugiat perferendis? At, facere perspiciatis. Nulla maxime temporibus asperiores consequatur deserunt tempora, adipisci culpa, quo quasi, unde quam. Quia error unde similique voluptas. Et error officiis quae labore, quaerat iste veritatis, ad placeat debitis consequatur veniam facere distinctio autem culpa, aut nostrum repellendus accusamus dignissimos. Hic tenetur alias assumenda quaerat dicta? Soluta magnam obcaecati neque voluptate. Odit nemo placeat incidunt ex tempore culpa laborum earum blanditiis sunt iusto quidem officia, dicta molestiae eveniet provident accusamus dolore veniam vitae? Quaerat consequatur temporibus, nam nobis consequuntur in placeat aperiam explicabo nihil? Neque beatae omnis eius nisi temporibus odit doloribus animi perspiciatis libero, voluptatibus corporis, sequi molestias sint error velit ex modi? Ipsum voluptatibus modi repellendus.! </p>
        </div>
      </div>
    )
  }
}
