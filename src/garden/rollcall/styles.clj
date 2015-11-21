(ns rollcall.styles
	(:require [garden.def :refer [defstylesheet defstyles]]
						[garden.units :as u :refer [px percent s]]))

(def accent "#BF4E30")
(def dark "#232C33")
(def light "white")

(def font-family "\"SF UI Text\" sans-serif")

(defstyles base
	;; Utility
	[:body {:background-color "white"
					:margin 0
					:font-family font-family}]

	[:a {:color accent}]

	[:.fill {:position "absolute"
					:top 0
					:left 0
					:right 0
					:bottom 0}]

	;; Toolbar
	[:.toolbar {:display "flex"
							:background-color dark
							:color "white"
							:height (px 64)
							:padding-left (px 8)
							:padding-right (px 8)
							:align-items "center"}
	 [:.spacer {:flex 1}]
	 [:.toolbar-item {:padding-left (px 8)
										:padding-right (px 8)}]
	 [:h1 {:margin 0
				 :font-size (px 16)
				 :text-transform "uppercase"}]]

	;; Panel
	[:.panel {:display "flex"
						:flex-direction "column"}
	 [:.panel-content {:flex 1}]]

	;; Split View
	[:.split-view {:display "flex"
								 :align-items "stretch"}
	 [:.major {:flex 3}]
	 [:.minor {:flex 1}]
	 [:.view+.view {:border-left "1px solid #eee"}]])
