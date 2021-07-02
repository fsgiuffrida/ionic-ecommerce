<template>
    <ion-page>
        <ion-header :translucent="true">
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-menu-button color="primary"></ion-menu-button>
                </ion-buttons>
                <ion-title>Carro de Compras</ion-title>
            </ion-toolbar>
        </ion-header>
        <ion-content>
                 <ion-card v-for="product in cart" :key="product.id">
                    <ion-card-header>
                        <ion-card-subtitle>Cod.:{{product.code}}</ion-card-subtitle>
                        <ion-card-title>{{product.name}}</ion-card-title>
                    </ion-card-header>

                    <ion-card-content>
                    ${{product.price}}x{{product.quantity}}
                    <ion-button v-on:click="removeProductToCart(product.id)" color="danger">Borrar</ion-button>
                    </ion-card-content>
                </ion-card>   
        </ion-content>
    </ion-page>
</template>

<script>
import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';
// import { mapMutations } from 'vuex'

export default defineComponent({

    components: { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonMenuButton, IonTitle, IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonButton},

    computed: {
		cart () {
			return this.$store.getters['items']
		}
	},

    methods:{
		removeProductToCart(id){
            this.$store.commit('remove', id)
        }
    },

    // methods:{
    //     ...mapMutations({
    //         removeProductToCart: 'remove',
    //     }),
    // }    
});
</script>
