<template>
    <div class="globalArea">
        <header>
            <h1>
                <router-link to="">
                    <img src="../images/logo.png" alt="logo">
                </router-link>
            </h1>
            <h2>HOME</h2>
            <button v-on:click="show()">CONTACT</button>
        </header>

        <aside>
            <button v-on:click="menu()">
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav class="active">
                <ul>
                    <li>
                        <router-link to="home" v-on:click="test()">HOME</router-link>
                    </li>
                    <li>
                        <router-link to="brand">BRAND</router-link>
                    </li>
                    <li>
                        <router-link to="channel">CHANNEL</router-link>
                    </li>
                    <li>
                        <router-link to="magazines">MAGAZINES</router-link>
                    </li>
                </ul>
            </nav>
        </aside>

        <footer>
            <p>COPYRIGHT © 2018 NATIONAL GEOGRAPHIC KOREA LLT. ALL RIGHT RESERVED</p>
            <div>
                <button >개인정보 취급방침 이용약관</button>
                <ul>
                    <li><a href="#"><img src="../images/sns_book.png" alt=""></a></li>
                    <li><a href="#"><img src="../images/sns_instar.png" alt=""></a></li>
                    <li><a href="#"><img src="../images/sns_youtube.png" alt=""></a></li>
                </ul>
            </div>
        </footer>
      
    </div>
    
</template>

<script>
export default {
    date(){
        return{

        }
    },
    computed:{
            
    },
    methods:{
        menu(){
            document.querySelector('nav').classList.toggle('active');
        },
        popup(){
            alert();
        },
        test(){
            console.log(11);
        }
    }
    
}
</script>

<style lang="scss" scoped>
$pointColor:#fcd804;
.globalArea{
 
    header{position: fixed; top: 55px; left: 0; width: 100%; padding:0 70px; box-sizing: border-box;
        display: flex; align-items: center; 
        h1{max-width: 194px; padding-right: 30px; border-right: 2px solid $pointColor; margin-right: 40px;
            img{width: 100%;}
        }
        h2{font-size: 30px;}
        button{margin-left: auto; font-size: 25px; color: $pointColor; padding-right: 0;}
    }

    aside{
        button{
            position: fixed; top: calc(50% - 4px); left: 70px; z-index: 1000;
            span{display: inline-block; width: 8px; height: 8px; background-color: white; border-radius: 100%;
                &:not(:last-of-type){margin-right: 5px;}
            }
        }
        nav{
            position: fixed;
            top: 0;
            left: -100%;
            bottom: 0;
            width: 430px;
            padding-right: 60px;
            box-sizing: border-box;
            background: rgba(0,0,0,0.8);
            transition: 0.5s left;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            z-index: 100;
            &.active{   
                left: 0;
            }
            ul{
                li{
                    text-align: right;
                    a{font-size: 26px; &:hover{color:$pointColor;} &.router-link-active{color:$pointColor;}}
                    &:not(:last-of-type){
                        margin-bottom: 100px;
                    }
                }
            }
        }
    }

    footer{
        position: fixed; left: 0; bottom: 0; width: 100%;  z-index: 10;
        display: flex; justify-content: space-between; align-items: center;
        padding: 45px 0; border-top: 1px solid rgba(255,255,255,0.4);
        >*{
            flex: 1; text-align: center;
        }
        p{font-size: 18px;}

        div{display: flex; justify-content: space-around;
            button{font-size: 18px;}
            ul{display: flex; justify-content: center;

                li:not(last-of-type){margin-right: 20px;}
            }
        }
    }
    
}
</style>