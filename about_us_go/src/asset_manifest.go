package main

import (
	"fmt"
	"net/http"
)

func asset_manifest(w http.ResponseWriter, r *http.Request) {
	// Just return back the json I'm already publicly hosting
	fmt.Println("Asset Manifest called")
	http.ServeFile(w,r,"static/asset-manifest.json")
}