package main

import (
	"html/template"
	"net/http"
)

func index(w http.ResponseWriter, r *http.Request) {
	tmpl := template.Must(template.ParseFiles("static/index.html"))
	// data,err:=ioutil.ReadFile("static/index.js")
	// w.Header.Set("Content-Type", "text/javascript")
	// w.Write(data)
	tmpl.Execute(w, nil)
}