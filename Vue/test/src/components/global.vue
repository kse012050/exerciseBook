<template>
    <div class="globalArea">
        <header>
            <h1>
                <router-link to="">
                    <img src="../images/logo.png" alt="logo">
                </router-link>
            </h1>
            <h2>HOME</h2>
            <button>CONTACT</button>
        </header>

        <aside>
            <button>
                <span></span>
                <span></span>
                <span></span>
            </button>
            <nav>
                <ul>
                    <li>
                        <router-link to="home">HOME</router-link>
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
                <button>개인정보 취급방침 이용약관</button>
                <ul>
                    <li><a href="#">1</a></li>
                    <li><a href="#">2</a></li>
                    <li><a href="#">3</a></li>
                </ul>
            </div>
        </footer>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
$pointColor:#fcd804;
.globalArea{
    @mixin fixed($width,$left,$test){
        position: fixed;
        width: $width;
        left: $left;
        @if($test == 1){
            padding: 0 70px;
            box-sizing: border-box;
        }
        
    }
    header{/* position: fixed; top: 55px; left: 0; width: 100%; padding:0 70px; box-sizing: border-box; */
        @include fixed(100%,0,1); top: 55px;
        display: flex; align-items: center; 
        h1{max-width: 194px; padding-right: 30px; border-right: 2px solid $pointColor; margin-right: 40px;
            img{width: 100%;}
        }
        h2{font-size: 30px;}
        button{margin-left: auto; font-size: 25px; background-color: transparent; border: none; color: $pointColor; padding-right: 0;}
    }

    footer{
        @include fixed(100%,0,1); bottom: 0px;
        display: flex; justify-content: space-between; align-items: center;

        &>*{
            flex: 1;
        }

        div{display: flex; justify-content: space-around;}
    }
}
</style>