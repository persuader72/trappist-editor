#import "@preview/bubble:0.2.2": *
#set text(lang: "it")

#let conf = yaml("{{.YamlConf}}")
#show: bubble.with(..conf)

