<template>
    <ion-card>
        <ion-card-header>
            <ion-card-subtitle>Cod.:{{code}}</ion-card-subtitle>
            <ion-card-title>{{name}}</ion-card-title>
        </ion-card-header>

        <ion-card-content>
        ${{price}}
        <ion-button v-on:click="addItemToCart(product)">Comprar</ion-button>
        </ion-card-content>
    </ion-card>
</template>

<script>
import { mapMutations } from 'vuex'
import { IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonButton } from '@ionic/vue';
import { defineComponent } from 'vue';

export default defineComponent({

    components: { IonCard, IonCardSubtitle, IonCardTitle, IonCardHeader, IonCardContent, IonButton },

	data() {
        return {
            product: {
				name: this.name,
				code: this.code,
				price: this.price,
				id: this.id,
				quantity: 1
			},
        };
    },

    props:['name', 'code', 'price', 'id'],

	methods:{
        ...mapMutations({
            addItemToCart: 'add',
        }),
  }
});
</script>