// Compiled by ClojureScript 1.7.170 {:static-fns true, :optimize-constants true}
goog.provide('cljs_time.internal.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('goog.string.format');
cljs_time.internal.core._EQ_ = (function cljs_time$internal$core$_EQ_(var_args){
var args__6051__auto__ = [];
var len__6044__auto___11858 = arguments.length;
var i__6045__auto___11859 = (0);
while(true){
if((i__6045__auto___11859 < len__6044__auto___11858)){
args__6051__auto__.push((arguments[i__6045__auto___11859]));

var G__11860 = (i__6045__auto___11859 + (1));
i__6045__auto___11859 = G__11860;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((0) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((0)),(0))):null);
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(argseq__6052__auto__);
});

cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
if(cljs.core.every_QMARK_((function (p1__11855_SHARP_){
return (p1__11855_SHARP_ instanceof goog.date.Date);
}),args)){
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (p1__11856_SHARP_){
return p1__11856_SHARP_.getTime();
}),args));
} else {
return cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core._EQ_,args);

}
});

cljs_time.internal.core._EQ_.cljs$lang$maxFixedArity = (0);

cljs_time.internal.core._EQ_.cljs$lang$applyTo = (function (seq11857){
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq(seq11857));
});
cljs_time.internal.core.leap_year_QMARK_ = (function cljs_time$internal$core$leap_year_QMARK_(y){
if((cljs.core.mod(y,(400)) === (0))){
return true;
} else {
if((cljs.core.mod(y,(100)) === (0))){
return false;
} else {
if((cljs.core.mod(y,(4)) === (0))){
return true;
} else {
return false;

}
}
}
});
cljs_time.internal.core.days_in_month = new cljs.core.PersistentVector(null, 12, 5, cljs.core.PersistentVector.EMPTY_NODE, [(31),(28),(31),(30),(31),(30),(31),(31),(30),(31),(30),(31)], null);
cljs_time.internal.core.year_corrected_dim = (function cljs_time$internal$core$year_corrected_dim(year,month){
var G__11863 = (function (){var G__11864 = (cljs.core.truth_(cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([month,(1)], 0)))?(11):(month - (1)));
return (cljs_time.internal.core.days_in_month.cljs$core$IFn$_invoke$arity$1 ? cljs_time.internal.core.days_in_month.cljs$core$IFn$_invoke$arity$1(G__11864) : cljs_time.internal.core.days_in_month.call(null,G__11864));
})();
var G__11863__$1 = (cljs.core.truth_((function (){var and__4974__auto__ = cljs_time.internal.core.leap_year_QMARK_(year);
if(cljs.core.truth_(and__4974__auto__)){
return cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([month,(2)], 0));
} else {
return and__4974__auto__;
}
})())?(G__11863 + (1)):G__11863);
return G__11863__$1;
});
cljs_time.internal.core.valid_date_QMARK_ = (function cljs_time$internal$core$valid_date_QMARK_(p__11865){
var map__11868 = p__11865;
var map__11868__$1 = ((((!((map__11868 == null)))?((((map__11868.cljs$lang$protocol_mask$partition0$ & (64))) || (map__11868.cljs$core$ISeq$))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__11868):map__11868);
var d = map__11868__$1;
var years = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11868__$1,cljs.core.cst$kw$years);
var months = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11868__$1,cljs.core.cst$kw$months);
var days = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11868__$1,cljs.core.cst$kw$days);
var hours = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11868__$1,cljs.core.cst$kw$hours);
var minutes = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11868__$1,cljs.core.cst$kw$minutes);
var seconds = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11868__$1,cljs.core.cst$kw$seconds);
var millis = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__11868__$1,cljs.core.cst$kw$millis);
var months__$1 = (months + (1));
if(cljs.core.truth_((function (){var and__4974__auto__ = years;
if(cljs.core.truth_(and__4974__auto__)){
return ((((1) <= months__$1)) && ((months__$1 <= (12)))) && ((((1) <= days)) && ((days <= cljs_time.internal.core.year_corrected_dim(years,months__$1)))) && ((((0) <= hours)) && ((hours <= (23)))) && ((((0) <= minutes)) && ((minutes <= (59)))) && ((((0) <= seconds)) && ((seconds <= (60)))) && ((((0) <= millis)) && ((millis <= (999))));
} else {
return and__4974__auto__;
}
})())){
return d;
} else {
throw cljs.core.ex_info.cljs$core$IFn$_invoke$arity$2("Date is not valid",new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$type,cljs.core.cst$kw$invalid_DASH_date,cljs.core.cst$kw$date,d], null));
}
});
cljs_time.internal.core.index_of = (function cljs_time$internal$core$index_of(coll,x){
return cljs.core.first(cljs.core.keep_indexed.cljs$core$IFn$_invoke$arity$2((function (p1__11871_SHARP_,p2__11870_SHARP_){
if(cljs.core.truth_(cljs_time.internal.core._EQ_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq([p2__11870_SHARP_,x], 0)))){
return p1__11871_SHARP_;
} else {
return null;
}
}),coll));
});
/**
 * Formats a string using goog.string.format.
 */
cljs_time.internal.core.format = (function cljs_time$internal$core$format(var_args){
var args__6051__auto__ = [];
var len__6044__auto___11874 = arguments.length;
var i__6045__auto___11875 = (0);
while(true){
if((i__6045__auto___11875 < len__6044__auto___11874)){
args__6051__auto__.push((arguments[i__6045__auto___11875]));

var G__11876 = (i__6045__auto___11875 + (1));
i__6045__auto___11875 = G__11876;
continue;
} else {
}
break;
}

var argseq__6052__auto__ = ((((1) < args__6051__auto__.length))?(new cljs.core.IndexedSeq(args__6051__auto__.slice((1)),(0))):null);
return cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__6052__auto__);
});

cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic = (function (fmt,args){
var args__$1 = cljs.core.map.cljs$core$IFn$_invoke$arity$2((function (x){
if(((x instanceof cljs.core.Keyword)) || ((x instanceof cljs.core.Symbol))){
return [cljs.core.str(x)].join('');
} else {
return x;
}
}),args);
return cljs.core.apply.cljs$core$IFn$_invoke$arity$3(goog.string.format,fmt,args__$1);
});

cljs_time.internal.core.format.cljs$lang$maxFixedArity = (1);

cljs_time.internal.core.format.cljs$lang$applyTo = (function (seq11872){
var G__11873 = cljs.core.first(seq11872);
var seq11872__$1 = cljs.core.next(seq11872);
return cljs_time.internal.core.format.cljs$core$IFn$_invoke$arity$variadic(G__11873,seq11872__$1);
});
/**
 * Remove the need to pull in gstring/format code in advanced compilation
 */
cljs_time.internal.core.zero_pad = (function cljs_time$internal$core$zero_pad(var_args){
var args11877 = [];
var len__6044__auto___11880 = arguments.length;
var i__6045__auto___11881 = (0);
while(true){
if((i__6045__auto___11881 < len__6044__auto___11880)){
args11877.push((arguments[i__6045__auto___11881]));

var G__11882 = (i__6045__auto___11881 + (1));
i__6045__auto___11881 = G__11882;
continue;
} else {
}
break;
}

var G__11879 = args11877.length;
switch (G__11879) {
case 1:
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error([cljs.core.str("Invalid arity: "),cljs.core.str(args11877.length)].join('')));

}
});

cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$1 = (function (n){
if((((0) <= n)) && ((n <= (9)))){
return [cljs.core.str("0"),cljs.core.str(n)].join('');
} else {
return [cljs.core.str(n)].join('');
}
});

cljs_time.internal.core.zero_pad.cljs$core$IFn$_invoke$arity$2 = (function (n,zeros){
if(((1) > zeros)){
return [cljs.core.str(n)].join('');
} else {
return [cljs.core.str(clojure.string.join.cljs$core$IFn$_invoke$arity$1(cljs.core.take.cljs$core$IFn$_invoke$arity$2((zeros - cljs.core.count([cljs.core.str(n)].join(''))),cljs.core.repeat.cljs$core$IFn$_invoke$arity$1("0")))),cljs.core.str(n)].join('');
}
});

cljs_time.internal.core.zero_pad.cljs$lang$maxFixedArity = 2;
cljs_time.internal.core.multiplied_by = (function cljs_time$internal$core$multiplied_by(period,scalar){
var scale_fn = (function cljs_time$internal$core$multiplied_by_$_scale_fn(field){
if(cljs.core.truth_(field)){
return (field * scalar);
} else {
return null;
}
});
return cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(cljs.core.update_in.cljs$core$IFn$_invoke$arity$3(period,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$millis], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$seconds], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$minutes], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$hours], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$days], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$weeks], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$months], null),scale_fn),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$years], null),scale_fn);
});
