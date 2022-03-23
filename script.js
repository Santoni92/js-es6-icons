console.log('JS OK!');
/*
const icon = {
	name: 'cat',
	prefix: 'fa-',
	type: 'animal',
	family: 'fas',
	color: 'orange'
};
*/

const icons = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

//console.log(icons.length);

//Milestone 1
//Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome
// dell'icona e l'icona stessa.

createBox(icons);

  
  


/*funzioni */
/*funzione che crea il div al cui interno andranno icona e nome */
function createBox(icons)
{
    const container = document.querySelector('#container'); //recupero il riferimento al div che conterrà l'icone ed il nome dell'icona stessa
    for(let i = 0; i < icons.length;i++)
    {
        const box = createIcon(icons[i]);
        //document.body.appendChild(box);
        container.appendChild(box);
        //milestone 3
        const scelta = document.querySelector('#scelta');
        scelta.addEventListener('change',function()
        {
            if(icons[i].type == this.value)
            {
                box.classList.add('hidden');
            }
        },false);
    }

}

function createIcon(icon)
{
    const box = document.createElement('div');
   /* box.innerHTML = `
                        <i class="${icon.prefix}solid ${icon.prefix}${icon.name} ${icon.prefix}"></i>
                        <span>${icon.name}<span>
                         `;
    */

    if(icon.color === 'blue')
    {
        box.innerHTML = `
                            <i class="${icon.prefix}solid ${icon.prefix}${icon.name} blue"></i>
                            <span>${icon.name}<span>
                         `;
    }else if(icon.color === 'green')
    {
        box.innerHTML = `
                         <i class="${icon.prefix}solid ${icon.prefix}${icon.name} green"></i>
                        <span>${icon.name}<span>
                        `;
    }else{
        box.innerHTML = `
                         <i class="${icon.prefix}solid ${icon.prefix}${icon.name} orange"></i>
                         <span>${icon.name}<span>
                        `;
    }

    return box;
}


