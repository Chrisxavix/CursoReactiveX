import { delay, fromEvent, map, tap } from "rxjs";

const texto = document.createElement('div');
texto.innerHTML = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi vitae ultricies lectus. Etiam quis sollicitudin justo, vitae ullamcorper nibh. Donec convallis mollis congue. Sed hendrerit laoreet libero eu malesuada. Sed non ornare urna, eu blandit eros. Pellentesque ultrices vulputate magna, ut dictum nulla consectetur tristique. Ut ullamcorper libero at est auctor finibus. Ut leo quam, aliquam at cursus mattis, sollicitudin sed dui. Aenean sagittis, odio vitae eleifend molestie, ex erat pellentesque lorem, sit amet vehicula risus enim finibus nulla. Pellentesque viverra leo sit amet diam porta, eget pulvinar tortor egestas. Phasellus sagittis sit amet lectus sed accumsan. Nunc a pharetra ex. Nulla facilisi. Praesent pretium auctor augue, vitae mollis metus dignissim sit amet.
<br/><br/>
Proin laoreet hendrerit sem. Morbi ligula nunc, placerat at est eget, commodo ornare est. Ut accumsan tellus dui, sit amet rutrum nisi suscipit sed. Duis posuere est eu tortor mollis condimentum. Nullam ullamcorper, arcu at accumsan hendrerit, ante mi accumsan nisl, lobortis molestie nisl nulla id lectus. Nullam malesuada mauris in consequat blandit. Curabitur nec mauris eget lectus tempor pulvinar et at metus. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Integer quis tortor dapibus purus rutrum tincidunt. Sed bibendum consectetur justo eget tempor. Nulla aliquam ornare urna, ac elementum nisi vestibulum volutpat. Vivamus varius, ante at molestie hendrerit, elit eros egestas eros, at pellentesque metus mi sit amet nunc. Nam aliquet tempus eros, eget egestas quam semper at. Sed lacinia fringilla mauris, quis rhoncus tortor suscipit vitae. Sed sed risus quis felis lacinia iaculis eget sit amet nunc. Aliquam erat volutpat.
<br/><br/>
Sed efficitur nisl quis tortor maximus iaculis. Morbi felis dui, dictum eu gravida ac, dignissim sed lorem. Donec ullamcorper elit ipsum, quis tincidunt tellus aliquet interdum. Aliquam ex ex, bibendum et tincidunt vitae, viverra at neque. Donec mollis porta ligula eget aliquam. Donec eleifend eu metus sit amet euismod. Fusce eu accumsan lacus. Vivamus risus nunc, maximus vel rhoncus in, luctus quis erat. Nulla luctus ipsum sit amet est commodo, ut placerat nisl pharetra. Maecenas enim dui, posuere quis est faucibus, condimentum faucibus est. Nam laoreet nisl dolor, a ornare massa blandit ac. Nunc cursus varius mi ac viverra. Proin mollis ipsum est, porttitor vulputate enim malesuada rhoncus. Donec ut enim nulla. Interdum et malesuada fames ac ante ipsum primis in faucibus. Donec mollis nisi mi, vel mattis augue efficitur quis.
<br/><br/>
Aliquam sapien quam, feugiat et tellus vitae, egestas feugiat ligula. Donec vel porta ex. Duis mollis orci nec nunc maximus, sit amet ultricies est sodales. Morbi sit amet imperdiet metus. Cras maximus, neque sit amet rhoncus sodales, orci ipsum sodales lacus, ut bibendum leo tortor eget tortor. Praesent id ex nulla. Nunc ut sagittis purus. Suspendisse posuere varius tincidunt. In sed est dictum, egestas leo in, feugiat urna. Donec venenatis, nibh sed fringilla fringilla, purus orci ultricies elit, sit amet feugiat turpis mi ut nulla. Suspendisse in bibendum sapien, eu scelerisque turpis. Sed malesuada, urna nec ultricies laoreet, nibh ligula bibendum odio, sed congue magna nibh vitae arcu. Ut lacinia odio id neque porta malesuada. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.
<br/><br/>
Proin eget luctus elit, at finibus diam. Morbi velit nulla, tincidunt vitae eros eget, molestie feugiat purus. Donec malesuada urna in nisi sodales interdum. Aliquam ac nibh sit amet ante iaculis vulputate. Suspendisse convallis, massa non tempus iaculis, elit justo pulvinar neque, eu laoreet lectus ante non mauris. Duis pulvinar porttitor semper. Praesent nec semper ligula. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec egestas sed turpis quis cursus. Nullam maximus, ex blandit viverra dignissim, mi nulla vehicula nisi, sit amet laoreet lacus ipsum imperdiet tortor. Quisque eget tristique velit. Pellentesque nisi tellus, rutrum convallis euismod vel, consequat eu enim. Donec congue, eros vitae commodo sodales, turpis augue tempor nisi, sed rhoncus elit justo et erat. Donec non euismod erat.`

const body = document.querySelector("body");

body.append(texto);

const progresBar = document.createElement("div");
progresBar.setAttribute("class", "progress-bar")
body.append(progresBar);

const scrolls$ = fromEvent(document, "scroll")
const progress$ = scrolls$.pipe(
    map(event => calcularPorcenatjesScroll(event)),
    tap(resp => console.log("Value", resp))
);

progress$.subscribe(porcentaje => {
    progresBar.style.width = `${porcentaje}%`
})

/* Cálculo de porcentaje */
const calcularPorcenatjesScroll = (event) => {
    const {
        scrollTop,
        scrollHeight,
        clientHeight
    } = event.target.documentElement;    
    return (scrollTop / (scrollHeight - clientHeight)) * 100;
}