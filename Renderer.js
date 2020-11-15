
class Renderer {

    loadInfo(data) {
        const source = $("#details-template").html()
        const template = Handlebars.compile(source)

        // const pName = template({name:data.name})
        // const pAddress = template({address:data.address})
        // const pPicture = template({picture:data.picture})
       
        const newHtml = template({name:data.name, address:data.address,picture:data.picture})
        $(".user-container").append(newHtml)
        // $(".user-container").append(pAddress)
        // $(".user-container").append(pPicture)
    }

    loadFriends(friends){
        const source = $("#friends-template").html()
        const template = Handlebars.compile(source)

        for (let friend of friends){
            const dude = template({dude:friend})
            $(".friends-container").append(dude)
        }
    }

    loadQuote(data){
        const source = $("#quote-template").html()
        const template = Handlebars.compile(source)
        const newHtml = template({link:data.quote.quote})
        $(".quote-container").append(newHtml)
    }

    loadPoke(data){
        const source = $("#poke-template").html()
        const template = Handlebars.compile(source)

        const pokeHtml = template({pic:data.pokePicture})
        const pokeHtml2 = template({name:data.pokeName})
        $(".pokemon-container").append(pokeHtml)
        $(".pokemon-container").append(pokeHtml2)
    }

    loadText(data){
        const source = $("#text-template").html()
        const template = Handlebars.compile(source)

        const textHtml=template({text:data.lipsum})
        $(".meat-container").append(textHtml)
    }


    Render(data){
        this.loadInfo(data)
        this.loadFriends(data.friends)
        this.loadQuote(data)
        this.loadPoke(data)
        this.loadText(data)
    }
}


