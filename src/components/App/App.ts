import { Vue, Component, Prop, Watch } from 'vue-property-decorator';
import { Game } from '../../game/Game';

@Component({
  template: require("./App.html"),
  style: require("./App.styl"),
  components: {}
})
export class App extends Vue {
  game: Game = new Game();

  get squares() {
    return this.game.squares;
  }

  movePiece() {
    const fromSquare = this.game.squares[1][4];
    const toSquare = this.game.squares[3][4];
    this.game.movePiece(fromSquare, toSquare);
  }
}
