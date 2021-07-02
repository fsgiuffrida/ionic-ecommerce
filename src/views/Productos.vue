<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>Productos</ion-title>
                <ion-button slot="end" router-direction="root" router-link="./cart">
                    <ion-icon class="icon" slot="end" :ios="cartOutline" :md="cartOutline"></ion-icon>
                </ion-button>
            </ion-toolbar>
        </ion-header>
        <ion-content>
                <Card
                v-for="product in products" 
                :key="product.id" 
                :name="product.name"
                :price="product.price"
                :code="product.code"
                :id="product.id"
                />                
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonContent, IonIcon, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonButton } from '@ionic/vue';
import { cartOutline } from 'ionicons/icons';
import { defineComponent } from 'vue';
import Card from '../components/card.vue'

export default defineComponent({
    components: { IonPage, IonContent, IonIcon, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonButton, Card },

    setup() {
        return {
                cartOutline,
                products: [
                    {
                        "name": "product1",
                        "code": 1338,
                        "price": 146765,
                        "id": 1,
                        "quantity": 1
                    },
                    {
                        "name": "product2",
                        "code": 1785,
                        "price": 15998,
                        "id": 2,
                        "quantity": 1
                    },
                    {
                        "name": "product3",
                        "code": 1856,
                        "price": 57600,
                        "id": 3,
                        "quantity": 1
                    },
                    {
                        "name": "product4",
                        "code": 2987,
                        "price": 10879,
                        "id": 4,
                        "quantity": 1
                    },
                    {
                        "name": "product5",
                        "code": 2456,
                        "price": 19780,
                        "id": 5,
                        "quantity": 1
                    },
                    
                ],
        }
    },
  
});
</script>

<style scoped>
#container {
  text-align: center;
  position: absolute;
  left: 0;
  right: 0;
  top: 50%;
  transform: translateY(-50%);
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}

.icon{
    margin-right: 10px;
    font-size: 30px;
}
</style>