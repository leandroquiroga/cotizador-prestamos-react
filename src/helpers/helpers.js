const totalMount = (mount, interests) => mount * interests;
const totalMountInterest = (mount, interests) => mount * interests;
const calculate = (mount, methodMount) => {
    /*
        Cantidades =>   0 a 1000 = 25%          Plazos =>   3 = 5%
                        1001 a 5000 = 20%                   6 = 10%
                        5001 a 10000 = 15%                  12 = 15%
                        > 10000 = 10%                       24 = 20%                  
    */
    let totalPay;
    let interests;
    let totalInterest;

    // total mount
    if (mount < 1000) {
        interests = 0.25;
        totalPay = totalMount(mount, interests);
    } else if ((mount > 1000) && (mount <= 5000)) {
        interests = 0.20;
        totalPay = totalMount(mount, interests);
    } else if ((mount > 5000) && (mount <= 10000)) {
        interests = 0.15;
        totalPay = totalMount(mount, interests);
    } else{
        interests = 0.10;
        totalPay = totalMount(mount, interests);
    }

    // total interests

    if (methodMount === 3) {
        interests = 0.05
        totalInterest = totalMountInterest(mount, interests)
    } else if (methodMount === 6) {
        interests = 0.10
        totalInterest = totalMountInterest(mount, interests)
    } else if (methodMount === 12) {
        interests = 0.15
        totalInterest = totalMountInterest(mount, interests)
    } else {
        interests = 0.20
        totalInterest = totalMountInterest(mount, interests)
    }
    
    return mount + totalPay + totalInterest
}


export default calculate