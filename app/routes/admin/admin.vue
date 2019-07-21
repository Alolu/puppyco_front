<template>
        <div class="wrapper">
            <Sidebar>
                <h1> Administration produit </h1>
                <table class="table">
                <thead>
                    <tr>
                        <th> ID </th>
                        <th> Titre </th>
                        <th> Description </th>
                        <th> Prix </th>
                        <th> Stock </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td> ID </td>
                        <td> Titre </td>
                        <td> Description </td>
                        <td> Prix </td>
                        <td> Stock </td>
                        <td name="buttons">
                            <div class="btn-group pull-right">
                                <button id="bEdit" type="button" class="btn btn-sm btn-default" onclick="rowEdit(this);">
                                    <i class="fas fa-pencil-alt"></i>
                                </button>
                                <button id="bElim" type="button" class="btn btn-sm btn-default" onclick="rowElim(this);">
                                    <i class="fas fa-trash" aria-hidden="true"></i>
                                </button>
                                <button id="bAcep" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="rowAcep(this);">
                                    <i class="fas fa-check"></i>
                                </button>
                                <button id="bCanc" type="button" class="btn btn-sm btn-default" style="display:none;" onclick="rowCancel(this);">
                                    <i class="fas fa-times" aria-hidden="true"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                </tbody>
                </table>
            </Sidebar>
        </div>
</template>
<script>
import Sidebar from '../../components/Sidebar.vue'
export default {
    components: {
        Sidebar
    },
    data(){
        return {
        }
    }
}
</script>
