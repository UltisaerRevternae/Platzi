// shift()
const colors=['yellow','blue','red']
const removedColors=colors.shift()
console.log(colors)
console.log(removedColors)

//unshift()
const newColors=colors.unshift('pink','purple')
console.log(colors)
console.log(newColors)

//reto

let playlist = ['El nuevo amanecer' , 'El ultimo adios', 'Lo siento']

list = () => console.log(`List update: ${playlist.join(' , ')}`) 

function managePlaylist(playlist, newSong) {
  console.log(`Initial list : ${playlist.join(' , ')}`)
    playlist.shift()
  console.log(`New song : ${newSong}`)
    playlist.unshift(newSong)
  list()
}

managePlaylist(playlist, 'La nueva era')