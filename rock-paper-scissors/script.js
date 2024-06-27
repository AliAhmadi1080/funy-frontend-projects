function get_random(){
    num = Math.floor(Math.random() * 3)
    images = ['rock','paper','scissors']
    selected = images[num]
    return selected
}
urls_links = new Map()
urls_links.set('paper','images/paper.jpg')
urls_links.set('rock','images/rock.jpg')
urls_links.set('scissors','images/scissors.png')
map = new Map()
map.set('paper-paper','draw')
map.set('paper-rock','win')
map.set('paper-scissors','fail')
map.set('rock-rock','draw')
map.set('rock-scissors','win')
map.set('rock-paper','fail')
map.set('scissors-scissors','draw')
map.set('scissors-paper','win')
map.set('scissors-rock','fail')
function place_item(id_name){
    console.log(id_name)
    selected = get_random()
    selected_url = urls_links.get(selected)
    console.log(selected)
    palyer_palyed =  urls_links.get(id_name)
    document.getElementById('computer_play').setAttribute("src", selected_url);
    document.getElementById('player_play').setAttribute("src", palyer_palyed);
    state = map.get(id_name+'-'+selected)
    document.getElementById('name').innerHTML = state
    
}

