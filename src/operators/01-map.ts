import { map, range, tap } from "rxjs";

const $range = range(1, 5);

$range.pipe(
    map<number, string>(value => {
        return (value * 10).toString();
    }),
    tap(console.log)
).subscribe(
    response => {
        console.log("Ya con filtro Final: ", response)
    }
)