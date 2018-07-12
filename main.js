function getNum1() {
  var num = document.getElementById('num1').value;
  if(!isNaN(num)){
    return parseFloat(num);
  } else {
    alert("数値以外が入力されています");
    return false;
  }
}

function getNum2() {
  var num = document.getElementById('num2').value;
  if(!isNaN(num)){
    return parseFloat(num);
  } else {
    alert("数値以外が入力されています");
    return false;
  }
}

function showResult(num) {
    document.getElementById("box").innerHTML = num;
}

document.getElementById("add-button").onclick = function() {
  if ((getNum1() === false) || (getNum2() === false)){
    document.getElementById("box").innerHTML = "エラー";
  }else{
    var result = getNum1() + getNum2();
    showResult(result);
  }
};

document.getElementById("sub-button").onclick = function() {
  if ((getNum1() === false) || (getNum2() === false)){
    document.getElementById("box").innerHTML = "エラー";
  }else{
    var result = getNum1() - getNum2();
    showResult(result);
  }
};

document.getElementById("mul-button").onclick = function() {
  if ((getNum1() === false) || (getNum2() === false)){
    document.getElementById("box").innerHTML = "エラー";
  }else{
    var result = getNum1() * getNum2();
    showResult(result);
  }
};

document.getElementById("div-button").onclick = function() {
  if ((getNum1() === false) || (getNum2() === false)){
    document.getElementById("box").innerHTML = "エラー";
  }else{
    var result = getNum1() / getNum2();
    showResult(result);
  }
};


