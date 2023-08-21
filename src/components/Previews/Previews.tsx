import React from "react";
import "./Previews.css";
import PreviewMax from "../PreviewMax/PreviewMax";
import PreviewMin from "../PreviewMin/PreviewMin";

function Previews() {
    return (
        <section className="previews">
            <PreviewMax link="/men's-clothes"
                        image="https://images.unsplash.com/photo-1490578474895-699cd4e2cf59?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80"
                        title="Мужская одежда" classBlock="preview-max_top"/>
            <PreviewMin classBlock="preview-min_top" link="/electronics"
                        image="https://images.unsplash.com/photo-1498049794561-7780e7231661?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        title="Электроника"/>
            <PreviewMax classBlock="preview-max_bottom"
                        link="/women's-clothes"
                        image="https://images.unsplash.com/photo-1556159992-e189f8e50104?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                        title="Женская одежда"/>
            <PreviewMin link="/jewelery"
                        image="https://images.unsplash.com/photo-1588444968576-f8fe92ce56fd?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80"
                        title="Ювелирные изделия" classBlock="preview-min_bottom"/>
        </section>
    )
}

export default Previews;
