drogDiv('#demo-1')
drogDiv('#demo-2')

function drogDiv(Idname){

  const div = document.querySelector(Idname)
  let lastX
  let lastY
  let drog_stat = false
  function drogging(){
    if(drog_stat===true){
      div.style.backgroundColor = 'red'
    }else{
      div.style.backgroundColor = 'transparent'
    }
  }

  div.onmousedown = (e)=>{
    lastX = e.clientX
    lastY = e.clientY
    drog_stat = true
    drogging()
  }

  div.onmouseup = ()=>{
    drog_stat = false
    drogging()
  }

  div.onmouseout = ()=>{
    drog_stat = false
    drogging()
  }

  div.onmousemove = (e)=>{
    if (drog_stat === true) {
      let top = parseInt(div.style.top) || 0
      let left = parseInt(div.style.left) || 0
      div.style.top = (top + e.clientY - lastY) + 'px'
      div.style.left = (left + e.clientX - lastX) + 'px'
      lastX = e.clientX
      lastY = e.clientY
    }
  }

}