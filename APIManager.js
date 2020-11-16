class APIManager {
  constructor() {
    this.data = {};
  }

  getUserInfo() {
    $.ajax({
      url: "https://randomuser.me/api/?results=7",
      dataType: "json",
      async: false,
      success: (data) => {
        this.data.name = data.results.map(
          (n) => n.name.first + " " + n.name.last
        )[0];
        this.data.address = data.results.map(
          (l) => l.location.city + ", " + l.location.state
        )[0];
        this.data.picture = data.results.map((p) => p.picture.medium)[0];
        this.data.friends = data.results
          .map((f) => f.name.first + " " + f.name.last)
          .splice(1);
      },
    });
  }

  getQuote() {
    $.ajax({
      url: "https://api.kanye.rest",
      dataType: "json",
      async: false,
      success: (data) => (this.data.quote = data),
    });
  }

  getPoke() {
    $.ajax({
      url: "https://pokeapi.co/api/v2/pokemon/25",
      dataType: "json",
      async: false,
      success: (data) => {
        this.data.pokeName = data.name;
        this.data.pokePicture = data.sprites.other.dream_world.front_default;
      },
    });
  }

  getText() {
    $.ajax({
      url:
        "https://baconipsum.com/api/?type=all-meat&paras=2&start-with-lorem=1",
      dataType: "json",
      async: false,
      success: (data) => (this.data.lipsum = data),
    });
  }

  getData = () => this.data;

  loadData = () => {
    this.getUserInfo();
    this.getQuote();
    this.getPoke();
    this.getText();
  };
}
