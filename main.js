function primos() {
    var num = 1;
    var i = 1;
    var conta;
    while(i<=10) {
        num++;
        conta = 0;
        for(var x=num;x>0;x--) {
            if(num%x == 0) {
                conta++;
            }
        }
        if(conta<=2) {
            document.write('El número '+ num +' es primo <br>');
            i++;
        }
    }
}