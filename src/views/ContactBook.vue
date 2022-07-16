<script>
import { def } from "@vue/shared";
import InputSearch from "../components/InputSearch.vue";
import ContactList from "../components/ContactList.vue";
import ContactCard from "../components/ContactCard.vue";
import contactService from "../services/contact.service";

export default {
    components: {
        InputSearch,
        ContactList,
        ContactCard,
    },
    computed: {
        activeContact(){
            if (this.activeIndex < 0) return null;
            return this.contacts[this.activeIndex];
        },
    },
    data(){
        return {
            contacts: [],
            activeIndex: -1,
            searchText: "",
        };
    },
    methods: {
        async retrieveContacts () {
            try {
                this.contacts = await contactService.getAll();
            } catch (error) {
                console.log(error);
            }
        },

        refreshList() {
            this.retrieveContacts();
            this.activeIndex = 1;
        },
    },

    mounted() {
        this.refreshList();
    }
};
</script>

<template>
    <div class="page row">
        <div class="col-md-10">
            <InputSearch/>
        </div>
    </div>
    <div class="mt-3 col-md-6">
        <h4>
            Danh bạ
            <i class="fas fa-address-book"></i>
        </h4>

        <ContactList :contacts="contacts" 
        v-model:activeIndex="activeIndex"/>
    </div>

    <div class="mt-3 col-md-6">
        <div v-if="activeContact">
        <h4>
           Chi tiết liên hệ
           <i class="fas fa-address-card"></i> 
        </h4>
        <ContactCard :contact="activeContact" />
        </div>
    </div>

</template>
<style scoped>
.paga {
    text-align: left;
    max-width: 750px;
}
</style>