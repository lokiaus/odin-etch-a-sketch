
// Create a grid of 16x16 divs

function genDivs(gridsize) {
    const gridContainer = document.querySelector('#grid-container');
    for (let i = 1; i < gridsize; i++) {
        const row = document.createElement('div');
        row.className = 'row';
        for(let x = 1; x <= gridsize; x++) {
            const cell = document.createElement('div');
            cell.className = "gridsquare";
            // cell.innerText = (i * gridsize) + x;
            row.appendChild(cell);
        }
        gridContainer.appendChild(row)
    }
    // document.getElementById("code").innerText = gridContainer.innerHTML;
}

genDivs(16)

const cells = document.querySelectorAll('.gridsquare')
cells.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.backgroundColor = 'blue';
    })
});