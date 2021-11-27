package main

import (
	"fmt"
	"net/http"
	"github.com/gorilla/mux"
)

func main() {
	fmt.Println("Server started on port 8080")
	// Serve static folder as browse-able via api
	// Aka, /static/* is available and displays folder contents
	fs := http.FileServer(http.Dir("static"))

	r := mux.NewRouter()
	r.Use(corsMiddleware)

	r.HandleFunc("/", index)
	r.HandleFunc("/asset-manifest.json", asset_manifest)
	r.Handle("/static/{files}", http.StripPrefix("/static/", fs))
	http.ListenAndServe(":8080", r)
}

func corsMiddleware(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		w.Header().Set("Access-Control-Allow-Origin", "*")
		next.ServeHTTP(w,r)
	})
}