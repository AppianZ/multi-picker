var $data = [{
	"id": "1201",
	"value": "北京市",
	"child": [{
		"id": "001",
		"value": "东城区",//【2级联动:北京市 > 东城区】
	},
		{
			"id": "002",
			"value": "西城区",//【3级联动:北京市 > 西城区 > aaa街道】
			"child": [{
				"id": "a",
				"value": "aaa街道"
			}, {
				"id": "b",
				"value": "bbb街道"
			}, {
				"id": "c",
				"value": "ccc街道"
			}]
		}]
},
	{
		"id": "1203",
		"value": "福建省",
		"child": [{
			"id": "001",
			"value": "福州市",//【4级联动:福建省 > 福州市 > 晋安区 > a 街道】
			"child": [{
				"id": "a1",
				"value": "晋安区",
				"child": [{
					"id": "aaa",
					"value": "a街道"
				}, {
					"id": "bbb",
					"value": "b街道"
				}, {
					"id": "ccc",
					"value": "c街道"
				}, {
					"id": "ddd",
					"value": "d街道"
				}, {
					"id": "eee",
					"value": "e街道"
				}, {
					"id": "fff",
					"value": "f街道"
				}, {
					"id": "ggg",
					"value": "g街道"
				}, {
					"id": "hhh",
					"value": "h街道"
				}, {
					"id": "iii",
					"value": "i街道"
				}, {
					"id": "jjj",
					"value": "j街道"
				}, {
					"id": "kkk",
					"value": "k街道"
				}]
			},
				{
					"id": "b1",
					"value": "鼓楼区",
					"child": [{
						"id": "a",
						"value": "a道"
					}, {
						"id": "b",
						"value": "b道"
					}, {
						"id": "c",
						"value": "c道"
					}, {
						"id": "d",
						"value": "d道"
					}, {
						"id": "e",
						"value": "e道"
					}, {
						"id": "f",
						"value": "f道"
					}, {
						"id": "g",
						"value": "g道"
					}, {
						"id": "h",
						"value": "h道"
					}, {
						"id": "i",
						"value": "i道"
					}, {
						"id": "j",
						"value": "j道"
					}, {
						"id": "k",
						"value": "k道"
					}]
				}]
		},
			{
				"id": "002",
				"value": "厦门市",
				"child": [{
					"id": "2a",
					"value": "集美区",//【5级联动:福建省 > 厦门市 > 集美区 > aaa街道 > a1街道】
					"child": [{
						"id": "a",
						"value": "aaa街道",
						"child": [{
							"id": "aaa-1",
							"value": "a1街道",
						}, {
							"id": "aaa-2",
							"value": "a2街道",
						}]
					}, {
						"id": "b",
						"value": "bbb街道"
					}, {
						"id": "c",
						"value": "ccc街道"
					}, {
						"id": "d",
						"value": "ddd街道"
					}, {
						"id": "e",
						"value": "eee街道"
					}, {
						"id": "f",
						"value": "fff街道"
					}, {
						"id": "g",
						"value": "ggg街道"
					}, {
						"id": "h",
						"value": "hhh街道"
					}, {
						"id": "i",
						"value": "iii街道"
					}, {
						"id": "j",
						"value": "jjj街道"
					}, {
						"id": "k",
						"value": "kkk街道"
					}, {
						"id": "l",
						"value": "lll街道"
					}, {
						"id": "m",
						"value": "mmm街道"
					}, {
						"id": "n",
						"value": "nnn街道"
					}, {
						"id": "o",
						"value": "ooo街道"
					}, {
						"id": "p",
						"value": "ppp街道"
					}, {
						"id": "q",
						"value": "qqq街道"
					}, {
						"id": "r",
						"value": "rrr街道"
					}, {
						"id": "s",
						"value": "sss街道"
					}, {
						"id": "t",
						"value": "ttt街道"
					}]
				},
					{
						"id": "2b",
						"value": "湖里区",
						"child": [{
							"id": "a",
							"value": "aaa街道"
						}, {
							"id": "b",
							"value": "bbb街道"
						}, {
							"id": "c",
							"value": "ccc街道"
						}, {
							"id": "d",
							"value": "ddd街道"
						}, {
							"id": "e",
							"value": "eee街道"
						}, {
							"id": "f",
							"value": "fff街道"
						}, {
							"id": "g",
							"value": "ggg街道"
						}, {
							"id": "h",
							"value": "hhh街道"
						}, {
							"id": "i",
							"value": "iii街道"
						}, {
							"id": "j",
							"value": "jjj街道"
						}, {
							"id": "k",
							"value": "kkk街道"
						}, {
							"id": "l",
							"value": "lll街道"
						}, {
							"id": "m",
							"value": "mmm街道"
						}]
					},
					{
						"id": "2c",
						"value": "思明区",
					},
					{
						"id": "2d",
						"value": "同安区",
						"child": [{
							"id": "a",
							"value": "aaa街道"
						}, {
							"id": "b",
							"value": "bbb街道"
						}, {
							"id": "c",
							"value": "ccc街道"
						}]
					}]
			}]
	}
];
