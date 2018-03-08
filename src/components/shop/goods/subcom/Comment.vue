<template>
    <div>
        <div class="tab-content entry" style="display:block;">
            内容
        </div>

        <div class="tab-content" style="display: block;">
            <!--网友评论-->
            <div class="comment-box">
                <!--取得评论总数-->
                <!-- <form id="commentForm" name="commentForm" class="form-box" url="/tools/submit_ajax.ashx?action=comment_add&amp;channel_id=2&amp;article_id=98"> -->
                <form id="commentForm" name ="commentForm" class="form-box"  @submit.prevent="sendComments">
                    <div class="avatar-box">
                        <i class="iconfont icon-user-full"></i>
                    </div>
                    <div class="conn-box">
                        <div class="editor">
                            <!-- <textarea id="txtContent" name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea> -->
                             <textarea id="txtContent" name="txtContent" sucmsg=" " datatype="*10-1000" nullmsg="请填写评论内容！"></textarea>
                            <span class="Validform_checktip"></span>
                        </div>
                        <div class="subcon">
                            <input id="btnSubmit" name="submit" type="submit" value="提交评论" class="submit">
                            <span class="Validform_checktip"></span>
                        </div>
                    </div>
                </form>

                <ul id="commentList" class="list-box">
                    <p style="margin:5px 0 15px 69px;line-height:42px;text-align:center;border:1px solid #f7f7f7;">暂无评论，快来抢沙发吧！</p>
                    <li>
                        <div class="avatar-box">
                            <i class="iconfont icon-user-full"></i>
                        </div>
                        <div class="inner-box">
                            <div class="info">
                                <span>匿名用户</span>
                                <span>2017/10/23 14:58:59</span>
                            </div>
                            <p>躲在人群中</p>
                        </div>
                    </li>
                    <li>
                        <div class="avatar-box">
                            <i class="iconfont icon-user-full"></i>
                        </div>
                        <div class="inner-box">
                            <div class="info">
                                <span>匿名用户</span>
                                <span>2017/10/23 14:59:36</span>
                            </div>
                            <p>头摇晃 。心在慌</p>
                        </div>
                    </li>
                </ul>
                <!--放置页码-->
                <div class="page-box" style="margin:5px 0 0 62px">
                    <div id="pagination" class="digg">
                        <span class="disabled">« 上一页</span>
                        <span class="current">1</span>
                        <span class="disabled">下一页 »</span>
                    </div>
                </div>
                <!--/放置页码-->
            </div>

            <!--/网友评论-->
        </div>
    </div>
</template>

<script>
export default {
    props: ['id'],
    data () {
        return {
            
        }
    }
};
</script>

<style scoped>

</style>