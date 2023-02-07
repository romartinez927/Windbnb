export default function SearchPage() {
    return (
        <div>
            <form>
                <input type="text" placeholder="Add guests"></input>
                <ul>
                    <li>
                        <label for="helsinki">Helsinki</label>
                        <input type="radio" id="helsinki" name="meal" value="helsinki" checked />
                    </li>
                    <li>
                        <label for="turku">Turku</label>
                        <input type="radio" id="turku" name="meal" value="turku" />
                    </li>
                    <li>
                        <label for="oulu">Oulu</label>
                        <input type="radio" id="oulu" name="meal" value="oulu" />
                    </li>
                    <li>
                        <label for="vaasa">Vaasa</label>
                        <input type="radio" id="vaasa" name="meal" value="vaasa" />
                    </li>
                </ul>
                <button type="submit">Buscar</button>
            </form>
        </div>
    )
}