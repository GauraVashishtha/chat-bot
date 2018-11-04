from flask import Flask, render_template, request, Response
import botModule
import requests
from bs4 import BeautifulSoup
from bs4 import Comment
import json
import urllib2


app = Flask(__name__)


@app.route("/")
def form():
	return render_template('chat.html')

@app.route("/api",methods=['GET'])
def movie():
	if request.method == 'GET':
		token = "EAAHYO9AZClKABAOTOIpyjZCKpmMPUK72skxI8mQAlCZBMjAt6u9SPoImF6Arf7sxDbIrtqFygvPXNFZCe6mThj6y6l99R03w6czMPOE5Emf0vTHggZAUqZCQ7hmRpKtw1cgsZAlk3APR7inAUWZBtCI0Jn6c8zUoeXEKLWfVfrvx6gZDZD"

		daa = request.args.get('message')
		ans = botModule.predict(daa)	

		output = []

		if len(ans[1].strip()) == 0:
			return render_template('api.html',ans=ans[0],output=output)

		print ans

		url = "https://graph.facebook.com/v3.2/search?type=place&q="+ans[1]+"&limit=3&access_token="+token
		r = requests.get(url)
		data = json.loads(r.text)
		print data
		data = data["data"][:3]
		print data
		

		for d in data:
			url1 = "https://graph.facebook.com/v3.2/"+d["id"]+"?fields=picture%7Burl%7D%2Csingle_line_address%2Cwebsite%2Cphone&access_token="+token
			r1 = requests.get(url1)
			data1 = json.loads(r1.text)
			if "website" not in data1:
				data1["website"] = "NA"
			if "single_line_address" not in data1:
				data1["single_line_address"] = "NA"
			if data1["single_line_address"][:5] == "https" :
				data1["single_line_address"] = "NA"
			if "phone" not in data1:
				data1["phone"] = "NA"
			if "picture" not in data1:
				data1["picture"]["data"]["url"] = "NA"

			output.append((data1["picture"]["data"]["url"],data1["single_line_address"],data1["phone"],data1["website"],d["name"]))

		return render_template('api.html',ans=ans[0],output=output)

@app.route("/api2",methods=['GET'])
def movie2():
	if request.method == 'GET':
		token = "EAAHYO9AZClKABAOTOIpyjZCKpmMPUK72skxI8mQAlCZBMjAt6u9SPoImF6Arf7sxDbIrtqFygvPXNFZCe6mThj6y6l99R03w6czMPOE5Emf0vTHggZAUqZCQ7hmRpKtw1cgsZAlk3APR7inAUWZBtCI0Jn6c8zUoeXEKLWfVfrvx6gZDZD"

		daa = request.args.get('message')
		ans = botModule.predict(daa)	

		output = []

		if len(ans[1].strip()) == 0:
			return render_template('api.html',ans=ans[0],output=output)

		print ans
		
		latitude = request.args.get('latitude')
		longitude = request.args.get('longitude')

		url = "https://graph.facebook.com/v3.2/search?type=place&q="+ans[1]+"&center="+str(latitude)+"%2C"+str(longitude)+"&limit=3&access_token="+token

		r = requests.get(url)
		data = json.loads(r.text)
		print data
		data = data["data"][:3]
		print data
		

		for d in data:
			url1 = "https://graph.facebook.com/v3.2/"+d["id"]+"?fields=name%2Clocation%2Cphone%2Cpicture%7Burl%7D&access_token="+token
			r1 = requests.get(url1)
			data1 = json.loads(r1.text)
			print data1
			if "city" not in data1["location"]:
				data1["location"]["city"] = "NA"
			if "country" not in data1["location"]:
				data1["location"]["country"] = "NA"
			if "latitude" not in data1["location"]:
				data1["location"]["latitude"] = "NA"
			if "longitude" not in data1["location"]:
				data1["location"]["longitude"] = "NA"
			if "state" not in data1["location"]:
				data1["location"]["state"] = "NA"
			if "zip" not in data1["location"]:
				data1["location"]["zip"] = "NA"
			if "phone" not in data1:
				data1["phone"] = "NA"
			if "url" not in data1["picture"]["data"]:
				data1["picture"]["data"]["url"] = "NA"

			output.append((d["name"],data1["phone"],data1["location"]["country"],data1["location"]["city"],data1["location"]["latitude"],data1["location"]["longitude"],data1["location"]["state"],data1["location"]["zip"],data1["picture"]["data"]["url"]))
		return render_template('api2.html',ans=ans[0],output=output)


if __name__ == '__main__':
	app.run(debug=True)
