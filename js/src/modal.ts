export class Modal
{
    private modal: (any) = document.getElementById("myModal") as HTMLInputElement | null;

    public modalOpen() {
        var btn = document.getElementById("myBtn");
        this.modal.style.display = "block";
    }

    public modalClose() {
        var span = document.getElementsByClassName("close")[0];
        this.modal.style.display = "none";
    }
}